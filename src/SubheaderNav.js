import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

const SubheaderNav = () => (


  <Tabs>
    <Tab
      icon={<FontIcon className="material-icons">phone</FontIcon>}
      label="FOODS"
    />
    <Tab
      icon={<FontIcon className="material-icons">favorite</FontIcon>}
      label="RECIPES"
    />
    <Tab
      icon={<MapsPersonPin />}
      label="RESEARCH"
    />
    <Tab
      icon={<MapsPersonPin />}
      label="MY SAVED"
    />
  </Tabs>
);

export default SubheaderNav;
