import React from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams, useHistory } from "react-router-dom";
import Moment from "react-moment";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

function Launch() {
  let history = useHistory();
  let { flight_number } = useParams();

  flight_number = parseInt(flight_number);

  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number },
  });

  if (error) return console.log(`Error! ${error.message}`);

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <header className="modal-card-head">
          <p className="modal-card-title">
            Launch:
            <span className="has-text-weight-semibold ml-2">
              {data && data.launch.mission_name}
            </span>
          </p>
          <button
            className="delete"
            aria-label="close"
            onClick={() => history.goBack()}
          ></button>
        </header>
        <section className="modal-card-body">
          {loading ? (
            <span className="loader"></span>
          ) : (
            <>
              <p className="is-size-4  mb-3">
                Flight:
                <span className="has-text-weight-semibold">
                  {data && data.launch.flight_number}
                </span>
              </p>
              <p className="is-size-4  mb-3">
                Year:
                <span className="has-text-weight-semibold">
                  {data && data.launch.launch_year}
                </span>
              </p>

              <p className="is-size-4 mb-3">
                Date:
                <span className="has-text-weight-semibold">
                  <Moment format="YYYY-MM-DD HH:mm">
                    {data && data.launch.launch_date_local}
                  </Moment>
                </span>
              </p>

              <p className="is-size-4">
                Success:
                <span className="has-text-weight-semibold">
                  {data && data.launch.launch_success ? "True" : "False"}
                </span>
              </p>
            </>
          )}
        </section>

        <footer className="modal-card-foot">
          <button className="button is-success">Save changes</button>
          <button className="button" onClick={() => history.goBack()}>
            Cancel
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Launch;
