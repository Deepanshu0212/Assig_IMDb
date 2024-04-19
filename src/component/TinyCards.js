import React from "react";
import PropTypes from 'prop-types';

function TinyCards({time, title, description, image}){
  return(
      <div className="row cards my-2">
        <div className="col-sm-4">
          <img src={image} width={120} height={120} alt="" />
        </div>
        <div className="col-sm-8">
          <p>{time}</p>
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
  );
}

TinyCards.propTypes = {
  time: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};
export default TinyCards;