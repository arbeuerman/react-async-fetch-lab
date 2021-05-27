import React, { Component } from "react";

// create your App component here
export default class App extends Component{
    
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res=>res.json())
        .then(data => console.log(data.people))
        .catch(err => console.error(err))
    }
    
    render(){
        return(<div>

        </div>)
    }
}