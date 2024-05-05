import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "4d2db45b-8a9d-460b-a7e5-526458cf557d");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Email sent successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
  };


  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msg_icon} alt='' /></h3>
            <p>Feel free to reach out through the contact form or find our contact
                information below. Your feedback, questions, and suggestions are important
                to us as we strive to provide exceptional service to our Cridon Community.
                <ul>
                    <li><img src={mail_icon} alt='' />Cridonpinnacle@gmail.com</li>
                    <li><img src={phone_icon} alt='' />+254797659232</li>
                    <li><img src={location_icon} alt='' />Garden City, Off Thika Road<br/>MJ 203, Kenya</li>
                </ul>
            </p>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name='name' placeholder='Enter your name' required/>
                <label>Your Email</label>
                <input type='email' name='email' placeholder='Enter your email' required/>
                <label>Phone Number</label>
                <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
                <label>Message</label>
                <textarea name='message' row='10' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit</button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact