import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { DiAndroid } from "react-icons/di";
import { FaApple, FaChrome, FaWindows } from "react-icons/fa";
import AndroidPlatformDetails from './AndroidPlatformDetails';
import IosPlatformDetails from './IosPlatformDetails';
import Mt5ForDesktopDetails from './Mt5ForDesktopDetails';
import WebPlatformDetails from './WebPlatformDetails';

const PlatFormTabs = () => {
  return (
    <div className='PlatFormTabs'>
        <Tabs defaultActiveKey="WebPlatform" id="platform-tab-example">
            <Tab eventKey="WebPlatform" title={<span><FaChrome></FaChrome> Web Platform</span>}>
               <WebPlatformDetails></WebPlatformDetails>
            </Tab>
            <Tab eventKey="Mt5ForDesktop" title={<span><FaWindows></FaWindows> MT5 for Desktop </span>}>
                <Mt5ForDesktopDetails></Mt5ForDesktopDetails>
            </Tab>
            <Tab eventKey="Mt5ForAndroid" title={<span><DiAndroid></DiAndroid> MT5 for Android</span>}>
                <AndroidPlatformDetails></AndroidPlatformDetails>
            </Tab>
            <Tab eventKey="Mt5ForIos" title={<span><FaApple></FaApple> MT5 for iOS</span>}>
                <IosPlatformDetails></IosPlatformDetails>
            </Tab>
        </Tabs>
    </div>
  )
}

export default PlatFormTabs