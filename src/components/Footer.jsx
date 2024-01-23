import React, { useState } from "react";
import "../../public/css/Footer.css";
import logojyc from "../../public/images/logojyc.png";
import logotmp from "../../public/images/logotmp.png";
import { Link } from 'react-router-dom';

function Footer() {
  //for 1st
  const [isOpen1, setIsOpen1] = useState(false)

  const onClickFooter1 = () => {
    setIsOpen1(!isOpen1);
  }

  //for 2nd
  const [isOpen2, setIsOpen2] = useState(false)

  const onClickFooter2 = () => {
    setIsOpen2(!isOpen2);
  }

  //for 3rd
  const [isOpen3, setIsOpen3] = useState(false)

  const onClickFooter3 = () => {
    setIsOpen3(!isOpen3);
  }

  //for 4th
  const [isOpen4, setIsOpen4] = useState(false)

  const onClickFooter4 = () => {
    setIsOpen4(!isOpen4);
  }




  return (
    <footer className="footer-content">
      <div className="footer-wrapper">
        <div className="footer-links-wrapper">
          <div></div>
          <div className="jyc-tmp">
            <div className="jyc">
              <div className="logojyc">
                <img className="footer-logojyc" src={logojyc} />
              </div>
              <div className="jyc-text">
                JUIT Youth Club (JYC) is the name <br />
                of enthusiasm, development, <br /> consistency and effort.
              </div>
            </div>
            <div className="tmp">
              <div className="logotmp">
                <img className="footer-logotmp" src={logotmp} />
              </div>
              <div className="tmp-text">
                Managed by Technical <br /> Sciences, Movies and <br />{" "}
                Photography club
              </div>
            </div>
          </div>
          <hr></hr>
          <div className={`links-wrapper-1 ${isOpen1 ? 'links-wrapper-1-active' : ''} `}>
            <div className="footer-heading"><div className="footer-heading-m">CLUBS</div>
              <div onClick={onClickFooter1} className="more-options-m"><div className="more-option-show">+</div><div className="more-option-hide">-</div></div></div>
            <ul>
              <li className="tsmp">
              <Link to='/'>Technical Sciences, Movies and Photography</Link>
              </li>
              <li className="eeh">
                <Link to='/'>Environment, Ecology and Health</Link>
              </li>
              <li className="lad">
                <Link to='/'>Literary and Debating</Link>
              </li>
              <li className="tam">
                <Link to='/'>Theater and Music</Link>
              </li>
              <li className="cad">
                <Link to='/'>Cultural and Dance</Link>
              </li>
              <li className="sports">
                <Link to='/'>Sports</Link>
              </li>
              <li className="koshish">
                <Link to='/'>Koshish</Link>
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className={`links-wrapper-2 ${isOpen2 ? 'links-wrapper-2-active' : ''} `}>
            <div className="footer-heading"><div className="footer-heading-m">COMMITTEES</div>
              <div onClick={onClickFooter2} className="more-options-m"><div className="more-option-show">+</div><div className="more-option-hide">-</div></div></div>
            <ul>
              <li className="pem">
                <Link to='/'>Procurement and Event Management</Link>
              </li>
              <li className="rah">
                <Link to='/'>Registration and Hospitality</Link>
              </li>
              <li className="map">
                <Link to='/'>Media and Publicity</Link>
              </li>
              <li className="ca">
                <Link to='/'>Creative Arts</Link>
              </li>
              <li className="dispi">
                <Link to='/'>Disciplinary</Link>
              </li>
              <li className="money">
                <Link to='/'>Finance</Link>
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className={`links-wrapper-3 ${isOpen3 ? 'links-wrapper-3-active' : ''} `}>
            <div className="footer-heading">
              <div className="footer-heading-m">CONTACT US    </div>
              <div onClick={onClickFooter3} className="more-options-m"><div className="more-option-show">+</div><div className="more-option-hide">-</div></div>
            </div>
            <ul>
              <li className="jyc-president-email">
                <a href="mailto:president.jyc@juitsolan.in">JYC President - president.jyc@juitsolan.in</a>
              </li>
              <li className="support-email">
                <a href='mailto:jycphotographyclub1@gmail.com'>Support - technicalclub.jyc@juitsolan.in</a>
              </li>
              <li className="juit-address">
                <Link to='//www.google.com/maps/place/Jaypee+University+of+Information+Technology/@31.0154348,77.0663199,15.87z/data=!4m5!3m4!1s0x39057db24364e085:0x4f4fefd65caa0317!8m2!3d31.016551!4d77.070159'>
                  Address - Waknaghat, P.O. Waknaghat, Teh Kandaghat, Distt.
                  Solan PIN-173 234 (H.P.), India
                </Link>
              </li>
            </ul>
          </div>

          <hr></hr>

          <div className={`links-wrapper-4 ${isOpen4 ? 'links-wrapper-4-active' : ''} `}>
            <div className="footer-heading">
              <div className="footer-heading-m">FOLLOW US</div>
              <div onClick={onClickFooter4} className="more-options-m"><div className="more-option-show">+</div><div className="more-option-hide">-</div></div>
            </div>
            <ul>
              <li>
                <Link to='/'>Facebook</Link>
              </li>
              <li>
                <Link to='https://instagram.com/jyc.juit?igshid=NjIwNzIyMDk2Mg=='>Instagram</Link>
              </li>
              <li>
                <Link to='/'>Twitter</Link>
              </li>
              <li>
                <Link to='https://www.linkedin.com/company/juit-youth-club/'>Linkedin</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            Copyright &copy; 2022 JYC All rights reserved.
          </div>
          <div className="social-icons">
            <Link to='/'><i class="fab fa-facebook"></i></Link>
            <Link to='https://instagram.com/jyc.juit?igshid=NjIwNzIyMDk2Mg=='><i class="fab fa-instagram"></i></Link>
            <Link to='https://www.linkedin.com/company/juit-youth-club/'><i class="fab fa-linkedin"></i></Link>
            <Link to='/'><i class="fab fa-twitter"></i></Link>
          </div>
          <div className="footer-option-name">
            {/* <Link to='/'> Team </Link>
            |<Link to='/page-under-construction'> Certification </Link>
            <Link to='//www.google.com'>
              | Login
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
