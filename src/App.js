import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation/Navigation';
import Hero from './components/hero/Hero';

import Card from './components/card/Card';
import spainPic from './images/spain_flag.svg';
import italyPic from './images/italy_flag.svg';
import chilePic from './images/chile_flag.svg';
import arubaPic from './images/aruba_flag.svg';

import Table from './components/table/Table';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <Hero />
        <br/>
        <Card countryName="Spain" countryPic={spainPic} />
        <Card countryName="Italy" countryPic={italyPic} />
        <Card countryName="Chile" countryPic={chilePic} />
        <Card countryName="Aruba" countryPic={arubaPic} />
        
        <h2 className="text-center">Some information about the places I would like to visit</h2>

        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th className="text-center">Destination</th>
              <th className="text-center">Capital</th>
              <th className="text-center">Official Language</th>
              <th className="text-center">Population (aprox.)</th>
              <th className="text-center">National Bird</th>
            </tr>
          </thead>
          <tbody>
            <Table destination="Spain" capital="Madrid" language="Spanish" population="46.77 million" bird="Eagle" />
            <Table destination="Italy" capital="Rome" language="Italian" population="59.83 million" bird="Bluebirds" />
            <Table destination="Aruba" capital="Oranjestad" language="Dutch" population="102,911" bird="Aruban Burrowing Owl" />
            <Table destination="Chile" capital="Santiago" language="Spanish" population="17.62 million" bird="Andean condor" />
          </tbody>
        </table>
          <Footer />
      </div>
    );
  }
}

export default App;
