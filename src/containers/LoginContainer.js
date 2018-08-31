import React from 'react'
import { connect } from 'react-redux';
import setLoginSuccess from '../actions/loginAction'
import { Redirect } from 'react-router-dom'
import LoginForm from '../components/loginForm'
import './LoginContainer.css'

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
            <h1>Log in</h1>
                <input type={'text'} placeholder={'Enter a Username'}/>
                <input type={'password'} placeholder={'Enter a Password'}/>
                <button onClick={() => this.startLogin()}>Login</button>
                <p>Forgot your password? Click <u>here</u></p>
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