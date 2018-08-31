import React from 'react'
import { Redirect } from 'react-router-dom'
import './welcome.css'

class Welcome extends React.Component {
    constructor(props){
        super(props)
        this.state={loadWelcomePage: false}
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({loadWelcomePage: true})
            console.log('time')
        },2000)
    }

    render(){
        return(
            <div>
                
                {(this.state.loadWelcomePage)? <Redirect to={{ pathname: "/login"}}/> : <div className={'welcome-page'}></div>}
            </div>
        )
    }
}

export default Welcome

//{(this.props.isLogged)? <Redirect to={{ pathname: "/main"}}/> : <Redirect to={{ pathname: "/login"}}/>}