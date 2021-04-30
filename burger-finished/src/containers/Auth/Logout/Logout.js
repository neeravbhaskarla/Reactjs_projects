import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import * as authActions from '../../../store/actions/index'
class Logout extends React.Component{
    componentDidMount(){
        this.props.onLogOut()
    }
    render(){
        return(
            <Redirect to='/'/>
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        onLogOut: ()=>dispatch(authActions.authLogout())
    }
}
export default connect(null, mapDispatchToProps)(Logout)