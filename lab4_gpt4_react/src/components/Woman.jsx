import React from "react";
import { exceedAllExpData } from "../mockData/WomanData";

const Woman = () => {
  const {
    header,
    description,
    earlyAccessText,
    ctaLink: { text: ctaText, href: ctaHref },
    illustration: { src, alt },
  } = exceedAllExpData;

  return (
    <div className="exceed_all_exp">
      <div className="exceed_all_exp__left">
        <img src={src} alt={alt} />
      </div>
      <div className="exceed_all_exp__right">
        <p className="early_access">{earlyAccessText}</p>
        <h2 className="exceed_all_exp__right__header">{header}</h2>
        <p className="exceed_all_exp_right__description">{description}</p>
        <a href={ctaHref} className="early_access_link">
          {ctaText}
        </a>
      </div>
    </div>
  );
};

export default Woman;
