import React from 'react'
import { connect } from 'react-redux';
import setLoginSuccess from '../actions/loginAction'



class Main extends React.Component {
    
    /*startLogin = () => {
        const user = {
            id: 12,
            name: 'Paul',
            usertype: 'grandchild'
        } 
        this.props.setLoginSuccess(true, user)
    }*/

    render(){
        return(
            <div>
                <h1>MAIN COMPONENT</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.login.isLogged,
    user: state.login.user
})

//export default connect(mapStateToProps, { })(Main)
export default Main