import React from "react";
import PropTypes from 'prop-types';

export default class PastMeetupCards extends React.Component {
  render() {
    return (
      <>
        <div key={this.props.id} className="card">
          <div className="card-body">
            {/* menerima props */}
            <h5 className="card-title">{this.props.date}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {this.props.detail}
            </h6>
            <p className="card-text">{this.props.went} went</p>
            <button className="btn btn-primary">View</button>
          </div>
        </div>
      </>
    );
  }
}

PastMeetupCards.propTypes = {
  id: PropTypes.number,
  date: PropTypes.string,
  detail: PropTypes.string,
  went: PropTypes.number
};
