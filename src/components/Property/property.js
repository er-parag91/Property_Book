import React from "react";
import "./property.css";
import { Link } from "react-router-dom";
const property = props => {
  return (
    <div className="eachHome">
      <img
        onClick={props.clicked}
        title="Add to favourite"
        className="liked"
        src="https://uploads.codesandbox.io/uploads/user/527a32a2-22ff-43fd-98ef-e7967feab739/1nxV-twitter-like.png"
      />{" "}
      <Link to={`/properties/${props.id}`}>
        <h2 style={{ color: "black" }}>{props.name}</h2>
        <p className="paragraph">
          <span style={{ color: "#3ad0ff", fontSize: "1.1rem" }}>
            Location :{" "}
          </span>
          {props.location}
        </p>
      </Link>
    </div>
  );
};

export default property;
