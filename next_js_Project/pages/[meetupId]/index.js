import Head from 'next/head'
import {MongoClient, ObjectId} from 'mongodb'
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { Fragment } from 'react'

const MeetupDetails = (props)=>{
    
    return(
        <Fragment>
            <Head>
                <title>{props.meetingData.title}</title>
                <meta
                    name='description'
                    content={props.meetingData.description}
                />
            </Head>
            <MeetupDetail
                title={props.meetingData.title}
                img={props.meetingData.image}
                description={props.meetingData.descripton}
                address={props.meetingData.address}
            />
        </Fragment>
    )
}
export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://neerav_1:g9BAbB61cDA7XMRs@cluster0.nkh0b.mongodb.net/meetups?retryWrites=true&w=majority')

    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close()

    return{
        fallback: 'blocking',
        paths: meetups.map(meetup=>({
            params: {meetupId: meetup._id.toString()},
        })),
    }
            
}
export async function getStaticProps(context){

    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        'mongodb+srv://neerav_1:g9BAbB61cDA7XMRs@cluster0.nkh0b.mongodb.net/meetups?retryWrites=true&w=majority'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });

    client.close();

    return{
        props: {
            meetingData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            }
        }
    }  
}
export default MeetupDetails