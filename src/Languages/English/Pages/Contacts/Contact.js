import React from "react";
import classes from "./Contacts.module.css";

const Contact = () => {
  return (
    <div id="contact" className={classes.contact_wrapper}>
      <div className={classes.header}>
        <h1>Contact Us</h1>
      </div>
      <div className={classes.contact_lists}>
        <div className={classes.text_field_wrapper}>
          <div className={classes.text_lists}>
            <label>Full Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Message</label>
            <textarea type="text" />
            <button>ላክ</button>
          </div>
        </div>
        <div className={classes.location_wrapper}>
          <div className={classes.location}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.549379150018!2d38.702902569443545!3d8.959489760892842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8152262a2fe7%3A0xebf39fed1068713d!2zSm9tbyBNZWRoYW5pYWxlbSBDaHVyY2ggfCDhjIDhiJ4g4YiY4Yu14YiA4YqS4Yur4YiI4YidIOGJpC_hiq3hiK3hiLXhibLhi6vhipU!5e0!3m2!1sfr!2set!4v1743270676674!5m2!1sfr!2set"
              width="800"
              height="450"
              // style="border:0;"
              allowfullscreen=""
              loading="lazy"
            //   referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
