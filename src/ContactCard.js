import React from 'react';
import profile from './profilebg.png';
// import './ContactList.css';
const ContactCard =(props)=>{
    const {id, name, email}= props.contact;
   return (
    <div className="items">
    <img className="bg_profile" src={profile} alt="profile" />
    <div className="content">
        <div className="header1">{name}</div>
        <div className="header2">{email}</div>
    </div>
    <i className="fas fa-trash"
      onClick={()=> props.clickHander(id)}
      ></i>
   
</div>

   );
};
export default ContactCard;