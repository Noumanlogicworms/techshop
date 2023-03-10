/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { urlFor } from "lib/client";
const FooterBanner = (props) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{props.footerBanner.discount}</p>
          <h3>{props.footerBanner.largeText1}</h3>
          <h3>{props.footerBanner.largeText2}</h3>
          <p>{props.footerBanner.saleTime}</p>
        </div>
        <div className="right">
          <p>{props.footerBanner.smallText}</p>
          <h3>{props.footerBanner.midText}</h3>
          <p>{props.footerBanner.desc}</p>
          <Link href={`/product/${props.footerBanner.product}`}>
            <button type="button">{props.footerBanner.buttonText}</button>
          </Link>
        </div>
        <img
          className="footer-banner-image"
          src={urlFor(props.footerBanner.image)}
          alt={props.footerBanner.name}
        />
      </div>
    </div>
  );
};

export default FooterBanner;
