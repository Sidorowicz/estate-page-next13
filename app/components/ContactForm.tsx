'use client'

import { useState } from "react"

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
        </div>
    )
}

export default ContactForm