/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";
import { urlFor } from "lib/client";
const HeroBanner = (props) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{props.heroBanner.smallText}</p>
        <h3>{props.heroBanner.midText}</h3>
        <h1>{props.heroBanner.largeText1}</h1>
        <img
          className="hero-banner-image"
          src={urlFor(props.heroBanner.image)}
          alt="headphones"
        />

        <div>
          <Link href={`/product/${props.heroBanner.product}`}>
            <button type="button">{props.heroBanner.buttonText}</button>
          </Link>

          <div className="desc">
            <h5>Description</h5>
            <p>{props.heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
