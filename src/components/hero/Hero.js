import React, { Component } from 'react';
import './Hero.css';
import travel1 from '../../images/travel_hero1.jpeg';
import travel2 from '../../images/travel_hero2.jpeg';
import travel3 from '../../images/travel_hero3.jpeg';
import travel4 from '../../images/travel_hero4.jpeg';

class Hero extends Component {
  
  render() {
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img className="d-block img-fluid" src={travel1} alt="First slide" />
          <div className="carousel-caption">
            <h1>Welcome to my Travel Site</h1>
            <p>This site is all about where I want to travel.</p>
            <h2>Here are some places I'd like to visit</h2>
          </div>
        </div>
        <div className="item">
          <img className="d-block img-fluid" src={travel2} alt="Second slide" />
          <div className="carousel-caption">
            <h1>Welcome to my Travel Site</h1>
            <p>This site is all about where I want to travel.</p>
            <h2>Here are some places I'd like to visit</h2>
          </div>
        </div>
        <div className="item">
          <img className="d-block img-fluid" src={travel3} alt="Third slide" />
          <div className="carousel-caption">
            <h1>Welcome to my Travel Site</h1>
            <p>This site is all about where I want to travel.</p>
            <h2>Here are some places I'd like to visit</h2>
          </div>
        </div>
        <div className="item">
          <img className="d-block img-fluid" src={travel4} alt="Fourth slide" />
          <div className="carousel-caption">
            <h1>Welcome to my Travel Site</h1>
            <p>This site is all about where I want to travel.</p>
            <h2>Here are some places I'd like to visit</h2>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
    

    );
  }
}

export default Hero;