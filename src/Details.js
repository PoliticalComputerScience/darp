import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Landing from './Landing';
import './App.css';

class Details extends Component {
  render() {
    return (
      <div className="App">
        <h1>
          <Link className="App-link" to="/">
            DARP
          </Link>
        </h1>
        <header className="header">
          <h3 id="subhead"> 
            Our process
          </h3> 
            <p id="info">
              To collect this data, we researched legislation, constitutional rights, and regulations regarding data privacy laws across the globe.
              We found in our research that regions often had similar policies in regards to data protection and privacy law that established regional attitudes and trends in response to this demand to regulate.
              Our interactive map, which was created using the <a href="https://www.react-simple-maps.io/"> react-simple-maps </a> library, currently displays the data for around 90 countries.
            </p> <br/>
          <h3 id="subhead"> 
            Our rubric
          </h3> 
            <p id="info">
              <h3> We evaluated these countries based on six general criteria: </h3>
                <h4> Right to Access and Consent </h4>
                This evaluates a country based on a data user’s ability to access and change their data once collected. This also assesses a company’s responsibility to inform a user of any security concerns surrounding this data, i.e. data breaches. 
                <h4> Law Enforcement Access </h4>
                This evaluates a country based on the government’s ability to access and store user data without their informed consent. 
                <h4> Data Localization </h4>
                This evaluates a country based on the extent to which data controllers and processors are able to transfer user data outside of the country as well as any restrictions concerning whether this data must be stored within country. 
                <h4> Enforcement </h4>
                This evaluates a country based on the presence of enforcement bodies, requirements regarding breach notifications, and penalties for violations. 
                <h4> Jurisdictional Coverage </h4>
                This evaluates a country based on the geographical extent of its laws and which actors, domestic or foreign fall under its purview. 
                <h4> Legislative Stability </h4>
                This evaluates a country based on the clarity and consistency of the laws, assessing how well a country uniformly applies the laws as well as the extent of coverage of relevant topics regarding data protection.  
            </p> <br/>
          <Link className="App-link" to="/app">
            Here's our interactive map that displays our findings.
          </Link> <br/> 
          <h3 id="subhead"> 
            Who we are
          </h3> 
          <p id="info">
            <a href="https://pcs.berkeley.edu"> PCS @ Berkeley </a> is UC Berkeley’s premier PoliSci+CS student organization.
            We aim to leverage students’ interests in technology and government affairs to address current problems within the United States legal and political systems.
          </p> <br/>
          <h3 id="subhead"> 
            Sources
          </h3> 
          <p id="info">
            Our sources include:
            <ul>
              <li> https://www.lexology.com/gtdt/tool/workareas/report/data-security-and-cybercrime/chapter/brazil </li>
              <li> https://www.dataprotectionreport.com/2018/06/scotus-expands-digital-privacy-rights-carpenter/ </li>
              <li> https://gettingthedealthrough.com/area/52/data-protection-privacy/ </li>
              <li> https://www.dlapiperdataprotection.com/index.html?t=world-map&c=US </li>
            </ul>
          </p> <br/>
          <p id="info">
            The following are some tools that have similar functionalities and focuses as our project:
            <ul>
              <li> <a href="https://unctad.org/en/Pages/DTL/STI_and_ICTs/ICT4D-Legislation/eCom-Data-Protection-Laws.aspx"> UN Conference on Trade and Development </a> </li>
              <li> <a href="https://www.dlapiperdataprotection.com/index.html?t=world-map&c=IN"> DLA Piper </a> </li>
              <li> <a href="https://uk.practicallaw.thomsonreuters.com/qacompare/report/country/26e6e77a216a406687891798b7ca92ef?comp=pluk&navId=F12B538FCB4C43B0E2921944F12F5D0D&transitionType=Default&contextData=(sc.Default)"> Thomas Reuters Practical Law </a> </li>
            </ul>
          </p>
        </header>
      </div>
    );
  }
}

export default Details;
