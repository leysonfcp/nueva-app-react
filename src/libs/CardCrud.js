import React, { Component } from 'react';

class CardCrud extends Component {

    constructor(){
        super();
        this.state={
            title: '',
            description: '',
            dateCreated: '',
            enable: true
        };
        this.addCard = this.addCard.bind(this);
        this.setDetail = this.setDetail.bind(this);
    }

    addCard(e){
        e.preventDefault();
        this.state["dateCreated"] = this.getCurrentDate();
        this.props.newCard(this.state);
    }
    
    setDetail(e){
        const {value, name} = e.target;
        this.setState({
          [name] : value
        })
    }
    
    getCurrentDate(){
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        
        if(month < 10){
            month = "0" + month;
        }
        
        if(day < 10){
            day = "0" + day;
        }
        
        var date = year + '-' + month + '-' + day;
        
        return date;
    }

    render (){
        return(
            <div>
                <form onSubmit={this.addCard}>
                    <h3>New Card</h3>
                    <div>
                        <label>Title: </label>
                        <input type="text" name="title" onChange={this.setDetail}/>
                    </div>
                    <div>
                        <label>Description: </label>
                        <textarea  type="text" name="description" onChange={this.setDetail}/>
                    </div>
                    <div className="buttonForm">
                        <button type="submit">save</button>
                    </div>
                </form>
            </div>
    )}
}
export default CardCrud;
