import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Resources = () => {
  return (
    <>
      <Header />

      <main style={{ padding: "40px", textAlign: "center" }}>
        <section style={{ marginBottom: "60px" }}>
          <h2>Data Structure</h2>
          <p>Content about Data Structures will go here.</p>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h2>Data Algorithm</h2>
          <p>Content about Algorithms will go here.</p>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h2>Tree</h2>
          <p>Content about Trees will go here.</p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Resources;