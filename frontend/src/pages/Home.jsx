import React from 'react'
import { useNavigate } from 'react-router'
import { useEffect, useContext, useState, useRef } from 'react'
import servicesDB from "../db/services.json"
import Card from '../components/ServicesCard/Card'
import styleHome from "./Home.module.scss"
import { AuthContext } from '../components/AuthContext';
import imageNet from "../assets/images/wingg.png"
import UserComponent from '../components/UserComponent'


const Home = () => {

  const myDivRef = useRef(null);

  const toggleDisplay = () => {
    // Access the DOM element using the ref
    if (myDivRef.current) {
      const currentDisplayStyle = window.getComputedStyle(myDivRef.current).display;
      myDivRef.current.style.display = currentDisplayStyle === 'none' ? 'flex' : 'none';
    }
  };


  const services1 = servicesDB.services

  const itEmail = 'it.support@socarpolymer.az';
  const erpEmail = 'erp.support@socarpolymer.az';


  // Grouping services by subject
  const groupedData = services1.reduce((groups, item) => {
    if (!groups[item.subject]) {
      groups[item.subject] = [];
    }
    groups[item.subject].push(item);
    return groups;
  }, {});


  const handleITClick = (sub) => {
    let foundIT;

    if (sub === "itIssues") {
      foundIT = services1.find((service) => {
        return service.tag === sub;
      });
      const mailtoUrl = `mailto:${itEmail}`;
      window.location.href = mailtoUrl;
      return;
    }

    else if (sub === "sapIssues") {
      foundIT = services1.find((service) => {
        return service.tag === sub;
      });
      const mailtoUrl = `mailto:${erpEmail}`;
      window.location.href = mailtoUrl;
      return;
    }

    else {
      window.open(sub, "_blank")
    }
    console.log(sub)

  };


  return (
    <UserComponent>
      <div className={styleHome.servicesContainerMain}>
        <div className={styleHome.servicesContainer}>

          <div className={styleHome.shortcutServices}>
            <div className={styleHome.introServiceBox}><a href='#sap'>SAP</a></div>
            <div className={styleHome.introServiceBox}><a href='#it'>IT Support</a></div>
            <div className={styleHome.introServiceBox}><a href='#starlims'>StarLims</a></div>
            <div className={styleHome.introServiceBox}><a href='#others'>Others</a></div>
          </div>
          <div className={styleHome.servicesText}>
            <h3>New Service...</h3>
            <p>On August 29 in 2022, SOCAR Polymer’s new Laboratory Information Management System ERP, STARLIMS went live enabling our laboratory staff to work from a centralized system, providing more improved and reliable service for end-users. The Project Owner is Vadim Gaifiyev. The Licensor is STARLIMS Corporation. The implementor is the NA-SA Informatics FZE company.</p>
          </div>

        </div>


        <div className={styleHome.imgNet}>
          <img src={imageNet}></img>
        </div>
        <div className={styleHome.containerofServices}>
          <div className={styleHome.headingforServices}>
            <h1>Online Services in Socar Polymer</h1>
          </div>
          <button onClick={toggleDisplay}>TOGGLE</button>
          <div ref={myDivRef} className={styleHome.cardsCont}>
            {Object.keys(groupedData).map(subject => (
              <div key={subject} className={styleHome.cardsGrouped} id={subject}>

                {groupedData[subject].map(item => (
                  <Card
                    handleITClick={handleITClick}
                    key={item.id} {...item} />
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </UserComponent>
  )
}

export default Home