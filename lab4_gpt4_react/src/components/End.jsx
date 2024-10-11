import React from "react";
import {endData} from "../mockData/endData"; 

const End = () => {
  const { header, button, copyright, links, companyLinks, contacts } = endData;

  const createLinksTemplate = (links) => {
    return links.map(link => (
      <a href={link.href} className="links_content" key={link.text}>
        {link.text}
      </a>
    ));
  };

  return (
    <section className="end">
      <h1 className="end_header">{header}</h1>
      <button className="early_access_btn">
        <p className="btn_text">{button.title}</p>
      </button>
      <div className="end_squares">
        <div className="square1_end">
          <img className="square1_end_img" src="./assets/img/logo.svg" alt="Logo" />
          <p className="square_end_text">{contacts.address}</p>
          <p className="square_end_text">Все права защищены</p>
        </div>
        <div className="square2_end">
          <p className="links">Ссылки</p>
          {createLinksTemplate(links)}
        </div>
        <div className="square3_end">
          <p className="company">Компания</p>
          {createLinksTemplate(companyLinks)}
        </div>
        <div className="square4_end">
          <p className="contacts">Контакты</p>
          <p className="square_end_text">{contacts.address}</p>
          <p className="square_end_text">{contacts.phone}</p>
          <p className="square_end_text">{contacts.email}</p>
        </div>
      </div>
      <section className="licence">
        <p className="copyright">{copyright}</p>
      </section>
    </section>
  );
};

export default End;
