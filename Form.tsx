"use client"
import { useState } from 'react'

function Form() {
    //This is for the form validation and prevents the form from being submitted unless all the boxes are filled out
    const [userInput, setUserInput] = useState({name: '', email: '', message: ''});
    const [message, setMessage] = useState('');

    function changes(e: { target: { name: any; value: any; }; }) {
        const { name, value } = e.target;
        setUserInput(prev => ({ ...prev, [name]: value }))
    }

    function submission(e: { preventDefault: () => void; }) {
        e.preventDefault();
        const { name, email, message } = userInput;
        if (!name.trim() || !email.trim() || !message.trim()) {
            setMessage("Invalid!");
        }
        else {
            setMessage(`The form has been submitted successfully! Welcome ${userInput.name}`);
        }
    }

    return (
        <form onSubmit={submission}>
            <label htmlFor="">Name
                <br />
                <input name='name' type="text" value={userInput.name} onChange={changes} placeholder="Please enter your name" />
                </label>
            <br /><br />

            <label htmlFor="">Email
                <br />
                <input name='email' type="email" value={userInput.email} onChange={changes} placeholder="Please enter your email" />
            </label>
            <br /><br />

            <label htmlFor="">Message
                <br />
                <textarea name="message" rows={6} value={userInput.message} onChange={changes} placeholder='Please write the message'></textarea>
            </label>
            <br /><br />
            
            <button type="submit">Submit</button>
            <p>{message}</p>
        </form>
    )
}

export default Form;