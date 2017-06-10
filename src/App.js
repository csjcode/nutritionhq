import React, { Component } from 'react';
import mongoose from 'mongoose';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import SubheaderNav from './SubheaderNav';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar
            style={{backgroundColor:'#262626', fontWeight:'bold'}}
            title="HealthBenefits.io"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
          />

          <SubheaderNav />

          <div style={{backgroundColor:'#0092ac', color:'white', fontSize:'16px', padding:'10px'}}>
            This is a submenu
          </div>
          <div style={{backgroundColor:'#fff', color:'#000', fontSize:'14px', padding:'20px', textAlign: 'left'}}>

            <p>
              Nutrition is the science that interprets the interaction of nutrients and other substances in food in relation to maintenance, growth, reproduction, health and disease of an organism. It includes food intake, absorption, assimilation, biosynthesis, catabolism and excretion.[1]
            </p>
            <p>
              The diet of an organism is what it eats, which is largely determined by the availability, the processing and palatability of foods. A healthy diet includes preparation of food and storage methods that preserve nutrients from oxidation, heat or leaching, and that reduce risk of foodborne illness.
            </p>
            <p>
              Registered dietitian nutritionists (RDs or RDNs)[2] are health professionals qualified to provide safe, evidence-based dietary advice which includes a review of what is eaten, a thorough review of nutritional health, and a personalized nutritional treatment plan. They also provide preventive and therapeutic programs at work places, schools and similar institutions. Certified Clinical Nutritionists or CCNs, are trained health professionals who also offer dietary advice on the role of nutrition in chronic disease, including possible prevention or remediation by addressing nutritional deficiencies before resorting to drugs.[3] Government regulation especially in terms of licensing, is currently less universal for the CCN than that of RD or RDN. Another advanced Nutrition Professional is a Certified Nutrition Specialist or CNS. These Board Certified Nutritionists typically specialize in obesity and chronic disease. In order to become board certified, potential CNS candidate must pass an examination, much like Registered Dieticians. This exam covers specific domains within the health sphere including; Clinical Intervention and Human Health.[4]
              </p>
              <p>
                Nutrition is the science that interprets the interaction of nutrients and other substances in food in relation to maintenance, growth, reproduction, health and disease of an organism. It includes food intake, absorption, assimilation, biosynthesis, catabolism and excretion.[1]
              </p>
              <p>
                The diet of an organism is what it eats, which is largely determined by the availability, the processing and palatability of foods. A healthy diet includes preparation of food and storage methods that preserve nutrients from oxidation, heat or leaching, and that reduce risk of foodborne illness.
              </p>
              <p>
                Registered dietitian nutritionists (RDs or RDNs)[2] are health professionals qualified to provide safe, evidence-based dietary advice which includes a review of what is eaten, a thorough review of nutritional health, and a personalized nutritional treatment plan. They also provide preventive and therapeutic programs at work places, schools and similar institutions. Certified Clinical Nutritionists or CCNs, are trained health professionals who also offer dietary advice on the role of nutrition in chronic disease, including possible prevention or remediation by addressing nutritional deficiencies before resorting to drugs.[3] Government regulation especially in terms of licensing, is currently less universal for the CCN than that of RD or RDN. Another advanced Nutrition Professional is a Certified Nutrition Specialist or CNS. These Board Certified Nutritionists typically specialize in obesity and chronic disease. In order to become board certified, potential CNS candidate must pass an examination, much like Registered Dieticians. This exam covers specific domains within the health sphere including; Clinical Intervention and Human Health.[4]
              </p>
              <p>
                Nutrition is the science that interprets the interaction of nutrients and other substances in food in relation to maintenance, growth, reproduction, health and disease of an organism. It includes food intake, absorption, assimilation, biosynthesis, catabolism and excretion.[1]
              </p>
              <p>
                The diet of an organism is what it eats, which is largely determined by the availability, the processing and palatability of foods. A healthy diet includes preparation of food and storage methods that preserve nutrients from oxidation, heat or leaching, and that reduce risk of foodborne illness.
              </p>
              <p>
                Registered dietitian nutritionists (RDs or RDNs)[2] are health professionals qualified to provide safe, evidence-based dietary advice which includes a review of what is eaten, a thorough review of nutritional health, and a personalized nutritional treatment plan. They also provide preventive and therapeutic programs at work places, schools and similar institutions. Certified Clinical Nutritionists or CCNs, are trained health professionals who also offer dietary advice on the role of nutrition in chronic disease, including possible prevention or remediation by addressing nutritional deficiencies before resorting to drugs.[3] Government regulation especially in terms of licensing, is currently less universal for the CCN than that of RD or RDN. Another advanced Nutrition Professional is a Certified Nutrition Specialist or CNS. These Board Certified Nutritionists typically specialize in obesity and chronic disease. In order to become board certified, potential CNS candidate must pass an examination, much like Registered Dieticians. This exam covers specific domains within the health sphere including; Clinical Intervention and Human Health.[4]
                </p>
                <p>
                  Nutrition is the science that interprets the interaction of nutrients and other substances in food in relation to maintenance, growth, reproduction, health and disease of an organism. It includes food intake, absorption, assimilation, biosynthesis, catabolism and excretion.[1]
                </p>
                <p>
                  The diet of an organism is what it eats, which is largely determined by the availability, the processing and palatability of foods. A healthy diet includes preparation of food and storage methods that preserve nutrients from oxidation, heat or leaching, and that reduce risk of foodborne illness.
                </p>
                <p>
                  Registered dietitian nutritionists (RDs or RDNs)[2] are health professionals qualified to provide safe, evidence-based dietary advice which includes a review of what is eaten, a thorough review of nutritional health, and a personalized nutritional treatment plan. They also provide preventive and therapeutic programs at work places, schools and similar institutions. Certified Clinical Nutritionists or CCNs, are trained health professionals who also offer dietary advice on the role of nutrition in chronic disease, including possible prevention or remediation by addressing nutritional deficiencies before resorting to drugs.[3] Government regulation especially in terms of licensing, is currently less universal for the CCN than that of RD or RDN. Another advanced Nutrition Professional is a Certified Nutrition Specialist or CNS. These Board Certified Nutritionists typically specialize in obesity and chronic disease. In order to become board certified, potential CNS candidate must pass an examination, much like Registered Dieticians. This exam covers specific domains within the health sphere including; Clinical Intervention and Human Health.[4]
                </p>
                <p>
                  Nutrition is the science that interprets the interaction of nutrients and other substances in food in relation to maintenance, growth, reproduction, health and disease of an organism. It includes food intake, absorption, assimilation, biosynthesis, catabolism and excretion.[1]
                </p>
                <p>
                  The diet of an organism is what it eats, which is largely determined by the availability, the processing and palatability of foods. A healthy diet includes preparation of food and storage methods that preserve nutrients from oxidation, heat or leaching, and that reduce risk of foodborne illness.
                </p>
                <p>
                  Registered dietitian nutritionists (RDs or RDNs)[2] are health professionals qualified to provide safe, evidence-based dietary advice which includes a review of what is eaten, a thorough review of nutritional health, and a personalized nutritional treatment plan. They also provide preventive and therapeutic programs at work places, schools and similar institutions. Certified Clinical Nutritionists or CCNs, are trained health professionals who also offer dietary advice on the role of nutrition in chronic disease, including possible prevention or remediation by addressing nutritional deficiencies before resorting to drugs.[3] Government regulation especially in terms of licensing, is currently less universal for the CCN than that of RD or RDN. Another advanced Nutrition Professional is a Certified Nutrition Specialist or CNS. These Board Certified Nutritionists typically specialize in obesity and chronic disease. In order to become board certified, potential CNS candidate must pass an examination, much like Registered Dieticians. This exam covers specific domains within the health sphere including; Clinical Intervention and Human Health.[4]
                  </p>
                  <p>
                    Nutrition is the science that interprets the interaction of nutrients and other substances in food in relation to maintenance, growth, reproduction, health and disease of an organism. It includes food intake, absorption, assimilation, biosynthesis, catabolism and excretion.[1]
                  </p>
                  <p>
                    The diet of an organism is what it eats, which is largely determined by the availability, the processing and palatability of foods. A healthy diet includes preparation of food and storage methods that preserve nutrients from oxidation, heat or leaching, and that reduce risk of foodborne illness.
                  </p>
                  <p>
                    Registered dietitian nutritionists (RDs or RDNs)[2] are health professionals qualified to provide safe, evidence-based dietary advice which includes a review of what is eaten, a thorough review of nutritional health, and a personalized nutritional treatment plan. They also provide preventive and therapeutic programs at work places, schools and similar institutions. Certified Clinical Nutritionists or CCNs, are trained health professionals who also offer dietary advice on the role of nutrition in chronic disease, including possible prevention or remediation by addressing nutritional deficiencies before resorting to drugs.[3] Government regulation especially in terms of licensing, is currently less universal for the CCN than that of RD or RDN. Another advanced Nutrition Professional is a Certified Nutrition Specialist or CNS. These Board Certified Nutritionists typically specialize in obesity and chronic disease. In order to become board certified, potential CNS candidate must pass an examination, much like Registered Dieticians. This exam covers specific domains within the health sphere including; Clinical Intervention and Human Health.[4]
                  </p>




          </div>


        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
