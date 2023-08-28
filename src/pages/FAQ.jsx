import React from 'react'
import styleFAQ from "./FAQ.module.scss"
import UserComponent from '../components/UserComponent'

const FAQ = () => {

  const itEmail = "it.support@socarpolymer.az"

  const handleClick = () => {
    const mailtoUrl = `mailto:${itEmail}`;
    window.location.href = mailtoUrl;

  }

  
  return (
    <UserComponent>
    <div className={styleFAQ.faqCont}>
      <div className={styleFAQ.qa} >
        <div className={styleFAQ.que} >
          <p>Komputerim xarab olub, neynəməliyəm?</p>
        </div>
        <div className={styleFAQ.ans} >
         <p> Bizə mail yazın &rarr; <span onClick={handleClick}>it.support@socarpolymer.az</span></p>
        </div>
      </div>
    </div>
    </UserComponent>
  )
}

export default FAQ