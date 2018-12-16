import React, { Component } from "react";
import { connect } from "react-redux";
import "./favourites.css";

class favourites extends Component {
  state = {
    id: ""
  };
  componentWillMount() {
    if (typeof localStorage.getItem("id")) {
      console.log(localStorage.getItem("id"));
      this.setState({ id: localStorage.getItem("id") });
    }
  }
  render() {
    let shortListed = <p>No favourites added yet!</p>;
    if (this.state.id && this.props.properties.res) {
      let arr = this.props.properties.res.find(Key => {
        return Key.id === +this.state.id;
      });
      shortListed = (
        <div className="SingleProperty">
          <h1>Property Name: {arr.property}</h1>
          <p>Location: {arr.location}</p>
          <p>Monthly Price: {arr.pricepermonth}</p>
          Current residents:
          <ul>
            {arr.occupants.map(each => {
              return (
                <li key={each.name}>
                  {each.name}, {each.age}
                </li>
              );
            })}
          </ul>
          <button className="Button" onClick={this.props.history.goBack}>
            Go Back
          </button>
        </div>
      );
    }
    return <div>{shortListed}</div>;
  }
}

const mapStateToProps = state => {
  return {
    properties: state.properties
  };
};

export default connect(mapStateToProps)(favourites);
