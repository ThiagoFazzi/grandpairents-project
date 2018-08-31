import React from 'react'

const buttonStyles = {
    padding: "16px 24px",
    background: "whitesmoke",
    cursor: "pointer",
    border: "none",
    borderRadius: 3
  };

export default class Button extends React.PureComponent {

    Button = ({ children, onClick }) => (
        <button onClick={onClick} style={{ ...buttonStyles }}>
          {children}
        </button>
      );
    render(){
        return(
                <div 
                    onClick={this.props.onClickButton} 
                    className={this.props.className}
                    value={this.props.value}
                    >{this.props.label}</div>
        )
    }
}