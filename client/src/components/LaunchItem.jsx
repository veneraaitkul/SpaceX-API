import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const LaunchItem = ({ flightNumber, missionName, dateLocal, isSuccess }) => {
  return (
    <div className="card mb-4">
      <header className="card-header">
        <p className="card-header-title ml-2">{missionName}</p>
        <span className="card-header-icon">
          <span
            className={
              isSuccess
                ? "material-icons has-text-success"
                : "material-icons has-text-danger"
            }
          >
            brightness_1
          </span>
        </span>
      </header>
      <div className="card-content">
        <div className="content">
          <p>
            <span className="has-text-weight-semibold"> Date:</span>{" "}
            <Moment format="YYYY-MM-DD HH:mm">{dateLocal}</Moment>
          </p>
        </div>
      </div>
      <footer className="card-footer">
        <Link to={`/launches/${flightNumber}`} className="card-footer-item">
          <button className="button is-light is-outlined">
            <span> More details</span>
            <span className="icon is-small">
              <span className="material-icons">navigate_next</span>
            </span>
          </button>
        </Link>
      </footer>
    </div>
  );
};

export default LaunchItem;
