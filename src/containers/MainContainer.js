import React from 'react'
import { connect } from 'react-redux';
import dataJson from '../data/data.json'
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
    }

    render(){
        if(!this.props.people) return 'Loading'
        return(
            <div>
                
            <div id="header"></div>
                <div className={'CardDeck'}>
                    {this.props.people.map(person => 
                        <div 
                            key={person.id}
                            className={'card'}
                        >
                                <img src={person.photo}></img>
                                <div id="namebox">{person.name}<div id="age">{person.age}</div></div>
                                <div className={'button-container'}>
                                   
                                    <Button 
                                        className="btnSkip" 
                                        onClickButton={() => this.skipCardHandler(person.id)}
                                    />
                                    <Button 
                                        className="btnLike" 
                                        onClickButton={() => this.likeCardHandler(person.id)}
                                    >
                                    </Button>
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

export default connect(mapStateToProps, { getPeople })(Main)