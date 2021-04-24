import React from 'react'
import Aux from '../../hoc/Auxilary/Auxilary'
import Modal from '../../components/UI/Modal/Modal'

const WithErrorHandler=(WrappedComponent, axios)=>{
    return class extends React.Component{
        state={
            error: null
        }
        componentWillMount(){
            this.reqInterceptor = axios.interceptors.request.use(req=>{
                this.setState({error:null})
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(null,err=>{
                this.setState({error: err})
            })
        }
        componentWillUnmount(){
            console.log("[will Unmount]",this.reqInterceptor,this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }
        errorHandler=()=>{
            this.setState({error:null})
        }
        render(){
            return(
                <Aux>
                    <Modal show={this.state.error}
                           modalClosed={this.errorHandler}>
                        {this.state.error?this.state.error.message:null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
}
export default WithErrorHandler