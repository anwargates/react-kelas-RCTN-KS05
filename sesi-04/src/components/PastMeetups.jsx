import React from 'react'

function PastMeetups() {
    return (
        <section className='section-past-meetups'>
            <div className='container d-flex flex-column align-items-center gap-3'>
                <h1>Past Meetups</h1>
                <div className="row d-flex flex-row gap-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">27 November 2017</h5>
                            <h6 className="card-subtitle mb-2 text-muted">#39 JakartaJS April Meetup with kumparan</h6>
                            <p className="card-text">139 went</p>
                            <button className="btn btn-primary">View</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">27 November 2017</h5>
                            <h6 className="card-subtitle mb-2 text-muted">#39 JakartaJS April Meetup with kumparan</h6>
                            <p className="card-text">139 went</p>
                            <button className="btn btn-primary">View</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">27 November 2017</h5>
                            <h6 className="card-subtitle mb-2 text-muted">#39 JakartaJS April Meetup with kumparan</h6>
                            <p className="card-text">139 went</p>
                            <button className="btn btn-primary">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PastMeetups