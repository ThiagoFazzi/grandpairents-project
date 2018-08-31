import React from 'react'
import { connect } from 'react-redux';
import dataJson from '../data/data.json'
//import setLoginSuccess from '../actions/loginAction'
import getPeople from '../actions/peopleAction'
import Button from '../components/button'
import './MainContainer.css'



class Main extends React.Component {
    

    componentDidMount(){
         console.log(this.props.filter)
         const data = dataJson.filter(person => person.type !== this.props.filter)
         this.props.getPeople(data)
    }

    likeCardHandler = (id) => {
        this.props.getPeople(this.props.people.filter(person => person.id !== id))
    }

    skipCardHandler = (id) => {
        this.props.getPeople(this.props.people.filter(person => person.id !== id))
        //const storageUserInfo = localStorage.getItem('userAppGP')
    }

    render(){
        if(!this.props.people) return 'Loading'
        return(
            <div>
                 
                <h1>Main</h1>

                <div className={'CardDeck'}>
                    {this.props.people.map(person => 
                        <div 
                            key={person.id}
                            className={'card'}
                        >
                                <img src={person.photo}></img>
                                {person.name}
                                <div className={'button-container'}>
                                    <Button 
                                        className="btnLike" 
                                        onClickButton={() => this.likeCardHandler(person.id)}
                                    >
                                    </Button>
                                    <Button 
                                        className="btnSkip" 
                                        onClickButton={() => this.skipCardHandler(person.id)}
                                    />
                                </div>                     
                        </div>
                    )}
                </div>
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