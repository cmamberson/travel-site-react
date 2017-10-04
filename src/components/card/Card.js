import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
  render() {
    return (
  <div className="col-md-3 text-center">
    <img className="image" src={this.props.countryPic} width="100%" alt="{this.props.countryName}"/>
    <h3>{this.props.countryName}</h3>
    <a href={"http://www."+this.props.countryName+".info/en_US/"} target="_blank">{this.props.countryName} Tourism Site</a>
  </div>
    );
  }
}

export default Card;