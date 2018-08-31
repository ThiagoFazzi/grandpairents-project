import React from 'react'
import { connect } from 'react-redux';
import setLoginSuccess from '../actions/loginAction'
import { Redirect } from 'react-router-dom'
import LoginForm from '../components/loginForm'

class Login extends React.Component {
    
    startLogin = () => {
        const user = {
            id: 12,
            name: 'Paul',
            usertype: 'grandchild'
        } 
        this.props.setLoginSuccess(true, user)
    }

    render(){
        return(
            <div>
                <input type={'text'} placeholder={'Enter a Username'}/>
                <input type={'password'} placeholder={'Enter a Password'}/>
                <button onClick={() => this.startLogin()}>Login</button>
                {(this.props.isLogged)? <Redirect to={{ pathname: "/main"}}/> : <Redirect to={{ pathname: "/login"}}/>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isLogged: state.loginReducer.isLogged,
    user: state.loginReducer.user
})

export default connect(mapStateToProps, { setLoginSuccess })(Login)