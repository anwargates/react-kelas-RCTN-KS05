import React, { Component } from 'react'

export default class PastMeetups extends Component {
    constructor() {
        super()
        this.state = [
            {
                date: "27 November 2017",
                detail: "#39 JakartaJS April Meetup with kumparan",
                went: 39
            },
            {
                date: "27 November 2017",
                detail: "#39 JakartaJS April Meetup with kumparan",
                went: 39
            },
            {
                date: "27 November 2017",
                detail: "#39 JakartaJS April Meetup with kumparan",
                went: 39
            }
        ]
    }


    render() {
        return (
            <>
                <section className='section-past-meetups'>
                    <div className='container d-flex flex-column align-items-center gap-3'>
                        <h1>Past Meetups</h1>
                        <div className="row d-flex flex-row gap-4">
                            {this.state.map((val) =>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{val.date}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{val.detail}</h6>
                                        <p className="card-text">{val.went} went</p>
                                        <button className="btn btn-primary">View</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
