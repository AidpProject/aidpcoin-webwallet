import React from "react";
//@ts-ignore
import logo from "../aidpcoin-aidp-logo.png";
export function Loader() {
  return (
    <main className="container">
      <article id="loading">
        <h3 className="rebel-headline">AIDP Webwallet</h3>
        <img src={logo}></img>
      </article>
    </main>
  );
}
