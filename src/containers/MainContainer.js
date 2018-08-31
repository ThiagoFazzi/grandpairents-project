import React from 'react'
import { connect } from 'react-redux';
import dataJson from '../data/data.json'
//import setLoginSuccess from '../actions/loginAction'
import getPeople from '../actions/peopleAction'



class Main extends React.Component {
    

    componentDidMount(){
        
         this.props.getPeople(dataJson)
         //console.log(this.props.user)
         //console.log(this.props)
    }
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
                
                {console.log(this.props.people)}
                <pre>{this.props.people}</pre>
                <div>{this.props.people.map(p => p.people.name)}</div>
                <h1>Main</h1>
            
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        filter: state.loginReducer.user.usertype,
        people: state.peopleReducer.people
    }
)

//export default Main
export default connect(mapStateToProps, { getPeople })(Main)