import React, { Component } from "react";
import { connect } from "react-redux";
import "./FullProperty.css";

class FullProperty extends Component {
  render() {
    let details = <p>Invalid property ID</p>;
    const id = +this.props.match.params.id;
    if (this.props.properties.res) {
      let arr = this.props.properties.res.find(Key => {
        return Key.id === id;
      });
      details = (
        <div>
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
    return <div className="FullProperty">{details}</div>;
  }
}

const mapStateToProps = state => {
  return {
    properties: state.properties
  };
};
export default connect(mapStateToProps)(FullProperty);
