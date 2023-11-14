import React from "react";
// import { PAGES } from "../utilites/nav-content";
const pages = {
  home: { title: "Home", content: "Home page" },
  about: { title: "About", content: "About page" },
  service: { title: "Service", content: "Service page" },
  feature: { title: "Feature", content: "Feature page" },
  priceing: { title: "Pricing", content: "Pricing page" },
  contract: { title: "Contract", content: "Contract page" },
};

// console.log(PAGES);
const NavComponent = () => {
  return (
    <>
      <nav>
        <h2>test</h2>
        <ul>
          {Object.keys(pages).map((item, index) => {
            console.log(item);
            <li key={index}>
              <a href={item}> {item} </a>
            </li>;
          })}
        </ul>
      </nav>
    </>
  );
};

export default NavComponent;
