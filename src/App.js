import React from "react";
import ReactDOM  from "react";
import Header from "./component/Header/Header";
import { Card } from "./component/Card"

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="country">
          <div className="container">
          
            <Card></Card>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
