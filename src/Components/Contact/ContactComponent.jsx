import React from "react";

import "./ContactStyle.css";
import ContactIconsComponent from "./ContactIcons/ContactIconsComponent";
import ContactsFormComponent from "./ContactsForm/ContactsFormComponent";

function ContactComponent() {
  return (
    <div>
      <ContactIconsComponent />

      <ContactsFormComponent />
    </div>
  );
}

export default ContactComponent;
