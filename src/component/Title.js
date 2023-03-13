import React from "react";
import "./Title.css";

const Title = (props) => {
  const {field} = props;
  // const { field,key } = props;
  return (
    <div className="Container">
      {/* <p className="primary">
        Id: {field.id} Title: {field.title} and Description:{field.description}
      </p> */}

      <h2 className="primary">Id:{field.id},Title:{field.title},Description:{field.description}</h2>
    </div>
  );
};

export default Title;
