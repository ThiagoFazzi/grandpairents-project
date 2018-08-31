import React from 'react'

const LoginForm = () => {
    return(
        <div>
            <form onSubmit={this.props.submitLogin}>
                <input type={'text'} placeholder={'Enter a Username'}/>
                <input type={'password'} placeholder={'Enter a Password'}/>
                <button type={'submit'}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm