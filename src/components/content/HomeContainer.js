import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import mongoose from 'mongoose';
import FontAwesome from 'react-fontawesome';
import { Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import '../../css/HomeContainer.css';
// import fetch from 'whatwg-fetch';

class HomeContainer extends Component {



  render() {

    return(
        <div style={{ background: '#fff', padding:'40px', minHeight: '380px' }}>
          <div style={{backgroundColor:'#fff', color:'#000', fontSize:'17px',
            marginTop: '40px',paddingTop:'15px', textAlign: 'left'}}>
            <div style={{marginBottom:'20px'}}>
              <h1 style={{fontSize:'28px', marginTop:'0', marginBottom:'0'}}>Home</h1>
              <p style={{fontSize:'16px', color:'#939393'}}>This website is to help track health</p>

            </div>

            <FontAwesome
              className='super-crazy-colors'
              name='recycle'
              size='2x'
              spin
              style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
            />

            <Row type="flex" justify="space-around" style={{padding:'10px 0px'}}>
              <Col sm={4} md={6} lg={6}>
                <Card style={{ }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="Nutrition Label" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nutrition_label.gif/234px-Nutrition_label.gif" />
                  </div>
                  <div className="custom-card">
                    <h3>Nutrition Info</h3>
                    <p>Get nutritional facts!</p>
                    <p>Get nutritional facts!</p>
                  </div>
                </Card>
              </Col>
              <Col sm={4} md={6} lg={6}>
                <Card style={{ }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="Nutrition Label" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nutrition_label.gif/234px-Nutrition_label.gif" />
                  </div>
                  <div className="custom-card">
                    <h3>Nutrition Info</h3>
                    <p>Get nutritional facts!</p>
                  </div>
                </Card>
              </Col>
              <Col sm={4} md={6} lg={6}>
                <Card style={{ }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="Nutrition Label" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nutrition_label.gif/234px-Nutrition_label.gif" />
                  </div>
                  <div className="custom-card">
                    <h3>Nutrition Info</h3>
                    <p>Get nutritional facts!</p>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row type="flex" justify="space-around" style={{padding:'10px 0px'}}>
              <Col sm={4} md={6} lg={6}>
                <Card style={{ }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="Nutrition Label" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nutrition_label.gif/234px-Nutrition_label.gif" />
                  </div>
                  <div className="custom-card">
                    <h3>Nutrition Info</h3>
                    <p>Get nutritional facts!</p>
                  </div>
                </Card>
              </Col>
              <Col sm={4} md={6} lg={6}>
                <Card style={{ }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="Nutrition Label" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nutrition_label.gif/234px-Nutrition_label.gif" />
                  </div>
                  <div className="custom-card">
                    <h3>Nutrition Info</h3>
                    <p>Get nutritional facts!</p>
                  </div>
                </Card>
              </Col>
              <Col sm={4} md={6} lg={6}>
                <Card style={{ }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="Nutrition Label" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nutrition_label.gif/234px-Nutrition_label.gif" />
                  </div>
                  <div className="custom-card">
                    <h3>Nutrition Info</h3>
                    <p>Get nutritional facts!</p>
                  </div>
                </Card>
              </Col>
            </Row>

            <Row type="flex" justify="space-around" style={{padding:'10px 0px'}}>
              <Col sm={4} md={6} lg={6}>
                <Card style={{ }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="Nutrition Label" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nutrition_label.gif/234px-Nutrition_label.gif" />
                  </div>
                  <div className="custom-card">
                    <h3>Nutrition Info</h3>
                    <p>Get nutritional facts!</p>
                  </div>
                </Card>
              </Col>
              <Col sm={4} md={6} lg={6}>
                <Card style={{ }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="Nutrition Label" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nutrition_label.gif/234px-Nutrition_label.gif" />
                  </div>
                  <div className="custom-card">
                    <h3>Nutrition Info</h3>
                    <p>Get nutritional facts!</p>
                  </div>
                </Card>
              </Col>
              <Col sm={4} md={6} lg={6}>
                <Card style={{ }} bodyStyle={{ padding: 0 }}>
                  <div className="custom-image">
                    <img alt="Nutrition Label" width="100%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Nutrition_label.gif/234px-Nutrition_label.gif" />
                  </div>
                  <div className="custom-card">
                    <h3>Nutrition Info</h3>
                    <p>Get nutritional facts!</p>
                  </div>
                </Card>
              </Col>
            </Row>

            <h1>Articles</h1>

            <Row>

              <Col span={8}>

                The World Health Organization (WHO) defined health in its broader sense in its 1948 constitution as "a state of complete physical, mental, and social well-being and not merely the absence of disease or infirmity."[2][3] This definition has been subject to controversy, in particular as lacking operational value,
              </Col>
              <Col span={8}>

                  Health is the level of functional and metabolic efficiency of a living organism. In humans it is the ability of individuals or communities to adapt and self-manage when facing physical, mental, psychological and social changes with environment.[1]

              </Col>
              <Col span={8}>

                the ambiguity in developing cohesive health strategies, and because of the problem created by use of the word "complete".[4][5][6] Other definitions have been proposed, among which a recent definition that correlates health and personal satisfaction.[7] [8] Classification systems such as the WHO Family of International
              </Col>

            </Row>

            <p>

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

    );
  }
}

export default HomeContainer;
