import React from "react";

const ThankYou = (props) => {
  const { data } = props;

  let array = {};

  Object.keys(data).map((item, i) => {
    array = { ...array, ...data[item] };
  });

  return (
    <div>
      <div>
        {Object.keys(array).map((item) => {
          return (
            <div className="single-pair">
              <div className="left-container">{item}</div>
              <div>{array[item]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ThankYou;
