import React from "react";
import PropTypes from "prop-types";

function ProductDetail(props) {
  return (
    <div className="col-sm-4 col-lg-4 col-md-4">
      <div className="thumbnail">
        <img
          src={props.imgUrl}
          alt=""
        />
        <div className="caption">
          <h4>
            <a href="#">{props.name}</a>
          </h4>
          <h4 className="">
            {props.price}
          </h4>
          <p>
            {props.desc}
          </p>
        </div>
        <div className="ratings">
          <p className="pull-right">
            {props.reviews} reviews
          </p>
          <p>
            {props.rating}
            <span className="glyphicon glyphicon-star" />
          </p>
        </div>
      </div>
    </div>
  );
}

ProductDetail.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  reviews: PropTypes.integer.isRequired,
  rating: PropTypes.integer.isRequired
};

export default ProductDetail;
