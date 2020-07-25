import React from "react";
import { gql, useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (error) return console.log(`Error! ${error.message}`);

  return (
    <div>
      <div className="columns is-multiline">
        {loading ? (
          <span className="loader"></span>
        ) : (
          data.launches.map((item, i) => {
            return (
              <div className="column is-one-third" key={i}>
                <LaunchItem
                  flightNumber={item.flight_number}
                  missionName={item.mission_name}
                  dateLocal={item.launch_date_local}
                  isSuccess={item.launch_success}
                />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Launches;
