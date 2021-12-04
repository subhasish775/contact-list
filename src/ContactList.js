import React from "react";
import "./ContactList.css";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    console.log(props);
    const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    <div className="contact_list">
      <h3>{renderContactList}</h3>
    </div>
  );
};
export default ContactList;
