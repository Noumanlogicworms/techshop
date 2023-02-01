/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlFor } from "lib/client";
const Product = (props) => {
  return (
    <div>
      <Link href={`/product/${props.product.slug.current}`}>
        <div className="product-card">
          <img
            className="product-image"
            src={urlFor(props.product.image && props.product.image[0])}
            alt={props.product.name}
            width={250}
            height={250}
          />
          <p className="product-name">{props.product.name}</p>
          <p className="product-price">PKR {props.product.price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
