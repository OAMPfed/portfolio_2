import React, { useEffect, useState } from 'react';
import profilePic from '../static/images/profile-pic.jpg';
import { Twitter, Linkedin, GitHub, User, Clipboard, Mail } from 'react-feather';

function Homepage(){
    const [firstname, setFirstname] = useState('Your name here');
    const [firstnameError, setfirstnameError] = useState(false);
    const [email, setEmail] = useState('example@email.com');
    const [emailError, setEmailError] = useState(false);
    const [telephone, setTelephone] = useState('123-123-1234');
    const [telephoneError, setTelephoneError] = useState(false);

    useEffect(() => {
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        let phonePattern = /\d{3}[\-\.\s]?\d{3}[\-\.\s]?\d{4}/;
        (firstname !== '') ? setfirstnameError(false) : setfirstnameError(true);
        (emailPattern.test(email)) ? setEmailError(false) : setEmailError(true);
        (phonePattern.test(telephone)) ? setTelephoneError(false) : setTelephoneError(true);
    }, [firstname, email, telephone])


    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(firstnameError === false && emailError === false && telephoneError === false){
            alert('form validated!')
        } else {
            alert('Non-valid values in form')
        }
    }

    return(
        <>
        <div className="about primary-box-padding" id="about">
            <div className="flex">
                <div className="logo-avatar primary-box">
                    <img src={profilePic} alt="Me and my girlfriend"
                        className="about-avatar"/>
                </div>
                <div className="flex-col about-info">
                    <p className="title">Ole A. M. Pettersen</p>
                    <p className="sub-title">Front-End Developer</p>
                    <div className="about-info-socials flex">
                        <a href="https://twitter.com/HookedReact">
                            <div className="primary-button primary-box flex">
                                    <Twitter color='#1da1f2' size={30}/>
                            </div>
                        </a>
                        <a href="https://www.linkedin.com/in/ole-alexander-moa-pettersen-877513171/">
                            <div className="primary-button primary-box flex">
                                <Linkedin color='#0e76a8' size={30}/>
                            </div>
                        </a>
                        <a href="https://github.com/OAMPfed/">
                            <div className="primary-button primary-box flex">
                                <GitHub color='#333' size={30}/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div style={{backgroundColor: '#2c3e50', width: '250px', height: '3px', borderRadius: '3px'}}/>
        <div className="about primary-box-padding" id="cv">
            <h2 className="title">Curriculum Vitae</h2>
            <div className="cv">
                <div className="cv-left">
                    <div>
                        <h3 className="cv-title">Education</h3>
                        <p className="cv-text"><span className="cv-span">2018 - 2020 </span>Front-End Development @ Noroff Fagskole Oslo</p>
                    </div>
                    <div>
                        <h3 className="cv-title">Experience</h3>
                        <p className="cv-text"><span className="cv-span">2019 - 2020 </span> Front-End Intern @ Play Magnus AS</p>
                    </div>
                    <div>
                        <h3 className="cv-title">Passion</h3>
                        <p className="cv-text">Web Development and creative CSS</p>
                    </div>
                </div>
                <div className="cv-right">
                    <h3 className="cv-title">Skills</h3>
                    <p className="cv-text"><span className="cv-span">Coding </span>HTML5</p>
                    <p className="cv-text"><span className="cv-span">Coding </span>CSS3</p>
                    <p className="cv-text"><span className="cv-span">Coding </span>JavaScript / ES6</p>
                    <p className="cv-text"><span className="cv-span">Coding </span>SCSS</p>
                    <p className="cv-text"><span className="cv-span">Coding </span>React 16+</p>
                    <p className="cv-text"><span className="cv-span">Design </span>Adobe Photoshop</p>
                    <p className="cv-text"><span className="cv-span">Design </span>Adobe Illustrator</p>
                    <p className="cv-text"><span className="cv-span">Design </span>Adobe XD</p>
                </div>
            </div>
        </div>
        <div style={{backgroundColor: '#2c3e50', width: '250px', height: '3px', borderRadius: '3px'}}/>
        <div className="about primary-box-padding" id="contact">
           <h2 className="title">Contact</h2>
           <div className="contact">
            <form onSubmit={handleSubmit}
                className="form">
                <p className="contact-error">{firstnameError === true ? 'Not a valid name' : null}</p>
                <label>
                    <p className="cv-text">Name:</p>
                </label>
                <input name="firstname" value={firstname} type="text"
                className="contact-input"
                onChange={(e) => setFirstname(e.target.value)}/>
                <br/>
                <p className="contact-error">{emailError === true ? 'Not a valid email' : null}</p>
                <label>
                    <p className="cv-text">Email:</p> 
                </label>
                <input name="email" value={email} type="text"
                className="contact-input"
                onChange={(e) => setEmail(e.target.value)}/>
                <br/>
                <p className="contact-error">{telephoneError === true ? 'Not a valid phone number' : null}</p>
                <label>
                    <p className="cv-text">Phone:</p>
                </label>
                <input name="telephone" value={telephone} type="text"
                className="contact-input"
                onChange={(e) => setTelephone(e.target.value)}/>
                <br/>
                <input type="submit" value="SUBMIT" className="contact-button"/>
            </form>
        </div>
        </div>
        <div className="about-links primary-box">
                <a href="#about" className="primary-button-link">
                    <User color='#2c3e50' size={30}/>
                    <p className="sub-title links links-text">ABOUT</p>
                </a>
                <a href="#cv" className="primary-button-link">
                    <Clipboard color='#2c3e50' size={30}/>
                    <p className="sub-title links links-text">CV</p>
                </a>
                <a href="#contact" className="primary-button-link">
                    <Mail color='#2c3e50' size={30}/>
                    <p className="sub-title links links-text">CONTACT</p>
                </a>
            </div>
        </>
    )
}

export default Homepage;