import React from "react";
import Navbar from "./Navbar";
function Index(props) {
  return (
    <>
      < Navbar />
      <div>
        <h1>index view</h1>
        <div>
          {props.flights.map((flight, index) => {
            let date = new Date();
            let style =
              date > flight.departs ? { color: "red" } : { color: "black" };

            return (
              <div key={index}>
                <div style={style}>
                  {flight.airline}
                  {" | "}
                  {flight.flights} {" | "}
                  {flight.departs.toString()}
                  <a href={`/flights/${flight._id}`}>Details</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Index;
