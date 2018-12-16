import React, { Component } from "react";
import Property from "../Property/property";
import { connect } from "react-redux";
import axios from "axios";

class properties extends Component {
  state = {
    properties: [],
    shortlisted: [],
    error: ""
  };
  favHandler = id => {
    if (typeof Storage !== "undefined") {
      // Store
      localStorage.setItem("id", id);
      alert("added to favourites");

      // Retrieve
    } else {
      this.setState({ error: "Your browser does not local storage" });
    }
  };

  componentDidMount() {
    axios
      .get("https://property-32184.firebaseio.com/property.json")
      .then(response => {
        const res = response.data[Object.keys(response.data)[0]];
        this.setState({ properties: res });
        this.props.setReduxStore({ res });
      });
  }
  render() {
    return (
      <div>
        {this.state.properties.map(ind => {
          return (
            <Property
              name={ind.property}
              location={ind.location}
              id={ind.id}
              key={ind.id}
              clicked={() => this.favHandler(ind.id)}
            />
          );
        })}
        {this.state.error ? alert(this.state.error) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    properties: state.properties
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setReduxStore: res => dispatch({ type: "SET_STATE", payload: res })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(properties);
