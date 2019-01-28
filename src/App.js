import React, { Component } from 'react';
import './App.css';
import {defaultCards} from './json/defaultCards.json';
import CardCrud from './libs/CardCrud';

class App extends Component {
    constructor(){
        super();
        this.state={
            defaultCards
        };
        this.addCard = this.addCard.bind(this);
    }

    addCard(card) {
        this.setState({
            defaultCards: [...this.state.defaultCards, card]
        })
    }

    viewDetailCard(index) {
        var card = document.getElementById("card" + index);
        if (this.state.defaultCards[index].enable) {
            card.style.display = "";
            this.state.defaultCards[index].enable = false;
        } else {
            card.style.display = "none";
            this.state.defaultCards[index].enable = true;
        }
    }

    removeCard(index){
        if(window.confirm('¿Are you sure to delete?'))
        {
            this.setState({
                defaultCards: this.state.defaultCards.filter((e,i)=>{
                    return i !== index
                })
            })
        }
    }
    
    render() {
        const cards = this.state.defaultCards.map((card, i) => {
        return (
            <div className="card" key={i}>
                <div>
                    <h3>{card.title} </h3>
                </div>
                <div id={"card" + i} style={{display: 'none'}}>
                    <p><b>{card.description}</b></p>
                    <p><b>{card.dateCreated}</b></p>
                </div>
                <div className="buttonCard">
                    <button onClick={this.viewDetailCard.bind(this, i)}>View</button>
                    <button onClick={this.removeCard.bind(this, i)}>Delete</button>
                </div>
            </div>
           )
        })
        return (
            <div className="app">
                <div className="columnForm">
                    <CardCrud newCard={this.addCard}></CardCrud>
                </div>
                <div className="columnCards">
                    {cards}
                </div>
            </div>
        );
    }
}

export default App;