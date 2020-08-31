
import React, { Component } from 'react';

class Hello extends Component{
    constructor(){
        super();
        this.state={color: 'red'};
    }

    render(){
        return (<h1> hello zbbi {this.props.color} wa3r</h1> ) ;
    }
}

export default Hello; 