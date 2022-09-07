import React, { Component } from "react";
import PastMeetupCards from "./Cards";

export default class PastMeetups extends Component {
  constructor() {
    super();
    this.state = {
      pastMeetupCards: [
        {
          id: 1,
          date: "27 November 2017",
          detail: "#39 JakartaJS April Meetup with kumparan",
          went: 39,
        },
        {
          id: 2,
          date: "27 November 2017",
          detail: "#39 JakartaJS April Meetup with kumparan",
          went: 39,
        },
        {
          id: 3,
          date: "27 November 2017",
          detail: "#39 JakartaJS April Meetup with kumparan",
          went: 39,
        },
        {
          id: 4,
          date: "27 November 2017",
          detail: "#39 JakartaJS April Meetup with kumparan",
          went: 39,
        },
        {
          id: 5,
          date: "27 November 2017",
          detail: "#39 JakartaJS April Meetup with kumparan",
          went: 39,
        },
        {
          id: 6,
          date: "27 November 2017",
          detail: "#39 JakartaJS April Meetup with kumparan",
          went: 39,
        },
      ],
    };
  }

  render() {
    return (
      <>
        <section className="section-past-meetups">
          <div className="container d-flex flex-column align-items-center gap-3">
            <h1>Past Meetups</h1>
            <div className="row d-flex flex-row gap-4">
              {this.state.pastMeetupCards.map((val) => (
                <PastMeetupCards
                  key={val.id}
                  date={val.date}
                  detail={val.detail}
                  went={val.went}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}
