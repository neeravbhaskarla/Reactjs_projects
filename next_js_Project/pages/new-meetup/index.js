import Head from 'next/head'
import {useRouter} from 'next/router'
import { Fragment } from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm'

const newMeetupPage=()=>{
    const router = useRouter()
    async function meetupAddHandler(meetupData){
       const response = await fetch('/api/new-meetup',{
           method: 'POST',
           body: JSON.stringify(meetupData),
           headers:{
               'Content-Type': 'application/json'
           }
       })
       const data = await response.json()
       console.log(data)
       router.push('/')
    }
    return(
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta
                    name='description'
                    content='Add your own meetups and create amazing networking opportunities.'
                />
            </Head>
                <NewMeetupForm onAddMeetup={meetupAddHandler}/>
        </Fragment>
    )
}
export default newMeetupPage