import React from "react";
import Form from "./components/Form";
import FormList from "./components/FormList";

function App() {
  return (
    <div style={{ minHeight: "100vh" }} className="bg-dark text-white">
      <div className="container">
        <div className="row">
          <Form />
          <FormList />
        </div>
      </div>
    </div>
  );
}

export default App;
