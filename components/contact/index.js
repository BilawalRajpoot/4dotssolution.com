import React from 'react'
import ContactForm from '../page-contact/contact-form'
import style from "./contact.module.css"

const ContactComponent = () => {
  return (
    <div className={style?.bgLight} >
      <div className="text-center py-5">
        <h6 className='text-black'>Let Us Know What You’re Looking for, We’ll Build it for You</h6>
        <h2 className='text-black' style={{fontWeight:"bold"}}>
          Let’s Work Together
        </h2>
      </div>
      <div className='container'>
        <div className="w-75 mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactComponent
