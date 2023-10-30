import React from "react";
import ProductTable from "./components/crud-tables/ProductTable";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className="my-5">
      <ProductTable />
    </Container>
  );
}

export default App;
