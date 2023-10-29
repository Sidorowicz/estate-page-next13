'use client'

import { useState } from "react"
import styles from '../page.module.css'

const ContactForm = () => {
    const [contact, setContact] = useState('')
    const [name, setName] = useState('')
    const [content, setContent] = useState('')

    const [responseText, setResponseText] = useState('')

    const makeApiCall = async (e: any) => {
        e.preventDefault()
        const data = { contact, name, content }
        //generic api call from next api
        const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        //non generic api call
        // const res = await fetch('http://localhost:8000/tickets', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        if (res.status == 201) { setResponseText('Your message has been delivered') }
        else { setResponseText('Something went wrong') }
    }
    return (
        <div className='container-fluid'>
            <div className='row contactImage' style={{ height: 800 }}>
                <div className="col-4" />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} className="col-8">
                    {responseText.length > 0 ? <h3 style={{ background: 'white', padding: 32, borderRadius: 20 }}>{responseText}</h3> :
                        <form style={{ border: '1px solid gray', borderRadius: 20, padding: 32, margin: 16, background: "white", width: 600 }} >

                            <div className="htmlForm-group" style={{ display: 'flex', flexDirection: 'column' }}>
                                <label htmlFor="exampleInputEmail1">Contact</label>
                                <input type="email" className="htmlForm-control" id="email" aria-describedby="email" placeholder="Enter contact informations." onChange={(e) => setContact(e.target.value)} />
                                <small id="emailHelp" className="htmlForm-text text-muted">We'll contact you using provided information!</small>
                            </div>
                            <div className="htmlForm-group" style={{ display: 'flex', flexDirection: 'column' }}>
                                <label htmlFor="exampleInputPassword1">Name</label>
                                <input type="password" className="htmlForm-control" id="password" placeholder="What's your name?" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="htmlForm-group" style={{ display: 'flex', flexDirection: 'column' }}>
                                <label htmlFor="exampleInputPassword1">Message</label>
                                <textarea className="htmlForm-control" id="password" rows={5} placeholder="What would you like to ask us?" onChange={(e) => setContent(e.target.value)} />
                            </div>
                            <div className="htmlForm-check" style={{ display: 'flex', alignItems: 'center', marginTop: 8, marginBottom: 8 }}>
                                <input type="checkbox" className="htmlForm-check-input" id="check" style={{ width: 20, height: 20 }} />
                                <label className="htmlForm-check-label" htmlFor="exampleCheck1" style={{ marginLeft: 16 }}> I understand how this works :)</label>
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={(e) => makeApiCall(e)}>Submit</button>
                        </form>}

                </div>
            </div>
            <div className="row">
                <h2 className={styles.textDivider}><span>Find Us</span></h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2394.0350607048354!2d23.17952097698673!3d53.1275161910741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ffeaf8f5f1b31%3A0x722dff80f3f5f2cd!2sWarszawska%20107%2C%2015-201%20Bia%C5%82ystok!5e0!3m2!1spl!2spl!4v1698425463675!5m2!1spl!2spl" width="600" height="650" style={{ border: 0, padding: 0, margin: 0, width: '100%' }} loading="lazy" ></iframe>
            </div>
        </div>
    )
}

export default ContactForm