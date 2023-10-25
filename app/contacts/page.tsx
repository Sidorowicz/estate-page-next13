
import React from 'react'
import './temporary.css'

const page = () => {
    return (
        <div className='container-fluid'>
            <div className='row contactImage' style={{ height: 800 }}>
                <div className="col-4" />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} className="col-8">
                    <form style={{ border: '1px solid gray', borderRadius: 20, padding: 32, margin: 16, background: "white", width: 600 }}>
                        <div className="htmlForm-group" style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="exampleInputEmail1">Contact</label>
                            <input type="email" className="htmlForm-control" id="email" aria-describedby="email" placeholder="Enter contact informations." />
                            <small id="emailHelp" className="htmlForm-text text-muted">We'll contact you using provided information!</small>
                        </div>
                        <div className="htmlForm-group" style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input type="password" className="htmlForm-control" id="password" placeholder="What's your name?" />
                        </div>
                        <div className="htmlForm-group" style={{ display: 'flex', flexDirection: 'column' }}>
                            <label htmlFor="exampleInputPassword1">Message</label>
                            <textarea className="htmlForm-control" id="password" rows={5} placeholder="What would you like to ask us?" />
                        </div>
                        <div className="htmlForm-check" style={{ display: 'flex', alignItems: 'center', marginTop: 8, marginBottom: 8 }}>
                            <input type="checkbox" className="htmlForm-check-input" id="check" style={{ width: 20, height: 20 }} />
                            <label className="htmlForm-check-label" htmlFor="exampleCheck1" style={{ marginLeft: 16 }}> I understand how this works :)</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page