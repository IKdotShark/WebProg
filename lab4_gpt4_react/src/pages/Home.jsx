import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import WhatIsChatGpt from "../components/WhatIsChatGpt";
import FutureHere from "../components/FutureHere";
import Woman from "../components/Woman";
import EarlyAccessButton from "../components/earlyAccessBtn";
import Blog from "../components/Blog";
import End from "../components/End"; // Новый компонент
import { endData } from "../mockData/endData"; // Данные для компонента End

const Home = () => {
  return (
    <>
      <section className="section header">
        <Header />
      </section>
      <section className="section hero_section">
        <Hero />
      </section>
      <section className="section brands_section">
        <Brands />
      </section>
      <section className="section what_is_chatgpt_section">
        <WhatIsChatGpt />
      </section>
      <section className="section future_here">
        <FutureHere />
      </section>
      <section className="section woman">
        <Woman />
      </section>
      <section className="early_access_bruhBtn">
        <EarlyAccessButton />
      </section>
      <section className="blog">
        <Blog />
      </section>
      <section className="section end_section">
        <End data={endData} />
      </section>
    </>
  );
};

export default Home;
