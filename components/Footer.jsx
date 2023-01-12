import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container footer__flex'>
      <div className='footer__top'><h3>
          Nada Estore 
        </h3></div>
      <div className='footer__flex centered'>
        <div>
          <h3>LEGAL TERMS AND CONDITIONS</h3>
          <p>Legal Notice</p>
          <p>Legal policy</p>
          <p>Cookies</p>
          <p>Legal Notice</p>
        </div>
        <div>
          <h3>LEGAL TERMS AND CONDITIONS</h3>
          <p>Legal Notice</p>
          <p>Legal policy</p>
          <p>Cookies</p>
          <p>Legal Notice</p>
        </div>
      </div>
      <p>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>

    </div>
  )
}

export default Footer