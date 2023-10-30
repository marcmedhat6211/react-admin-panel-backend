import React, { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import AddProductModal from "../modals/AddProductModal";
import ShowProductModal from "../modals/ShowProductModal";

const ProductTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSingleProductModal, setShowSingleProductModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [addProductLoading, setAddProductLoading] = useState(false);
  const [fetchProductLoading, setFetchProductLoading] = useState(false);
  const [productToBeShown, setProductToBeShown] = useState({});

  useEffect(() => {
    setFetchProductLoading(true);
    fetch("http://localhost:8084/api/dummy-product/list", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTg2ODY2NzEsImV4cCI6MTY5ODcyMjY3MSwicm9sZXMiOlsiUk9MRV9JTlRFUk5BTF9VU0VSIiwiUk9MRV9VU0VSIl0sImVtYWlsIjoibWFyY0BnbWFpbC5jb20ifQ.pXJBuMD_uB-zEZT9FHKpFmmEC7ktH8v7B_B763_kNy9aGSXcZmMwmCQn-OKR5phf4w4HHb81RVEzSBlav2b4_9M9rN1sOzo7ewS_pqAZKHU-rFW3p4BMfMuh0P1MkHGPKix-cso9h_EGXRrvQnSeUooROew_MfcWps601wJVEe77QjuriSJLhEqYz-tZ-_bcxeGLFUQ4_QW13YqOm5jeIgsWiY8czTJqEutHgrNTLVYP33aAZjZeUSn0OR47IwBJi_m_Oe45TDykGhVIkYVZyp7R3q8WHDdYfChHj28PEAzmQ8NL74XXwNhs1tshK1SODoSJM-MBa3h1R1ROY5XHTQ",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return false;
        }
      })
      .then((finalReponse) => {
        setProducts(finalReponse.data);
      })
      .finally(() => setFetchProductLoading(false));
  }, []);

  const addProductHandler = (data) => {
    setAddProductLoading(true);
    fetch("http://localhost:8084/api/dummy-product", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2OTg2ODY2NzEsImV4cCI6MTY5ODcyMjY3MSwicm9sZXMiOlsiUk9MRV9JTlRFUk5BTF9VU0VSIiwiUk9MRV9VU0VSIl0sImVtYWlsIjoibWFyY0BnbWFpbC5jb20ifQ.pXJBuMD_uB-zEZT9FHKpFmmEC7ktH8v7B_B763_kNy9aGSXcZmMwmCQn-OKR5phf4w4HHb81RVEzSBlav2b4_9M9rN1sOzo7ewS_pqAZKHU-rFW3p4BMfMuh0P1MkHGPKix-cso9h_EGXRrvQnSeUooROew_MfcWps601wJVEe77QjuriSJLhEqYz-tZ-_bcxeGLFUQ4_QW13YqOm5jeIgsWiY8czTJqEutHgrNTLVYP33aAZjZeUSn0OR47IwBJi_m_Oe45TDykGhVIkYVZyp7R3q8WHDdYfChHj28PEAzmQ8NL74XXwNhs1tshK1SODoSJM-MBa3h1R1ROY5XHTQ",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return false;
        }
      })
      .then((finalResponse) => {
        if (
          finalResponse &&
          "success" in finalResponse &&
          finalResponse.success
        ) {
          setProducts((prevState) => [
            ...prevState,
            { ...finalResponse.product },
          ]);
          setShowModal(false);
        }
      })
      .finally(() => setAddProductLoading(false));
  };

  return (
    <Fragment>
      <div className="d-flex justify-content-end mb-3">
        <Button variant="success" onClick={() => setShowModal(true)}>
          Add product
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!fetchProductLoading ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>${product.price}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-success"
                      size="sm"
                      onClick={() => {
                        setProductToBeShown(product);
                        setShowSingleProductModal(true);
                      }}
                    >
                      Show
                    </Button>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="mx-2"
                    >
                      Edit
                    </Button>
                    <Button variant="outline-danger" size="sm">
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Loading...</td>
            </tr>
          )}
        </tbody>
      </Table>
      <AddProductModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        addProductHandler={addProductHandler}
        loading={addProductLoading}
      />
      <ShowProductModal
        show={showSingleProductModal}
        handleClose={() => setShowSingleProductModal(false)}
        product={productToBeShown}
      />
    </Fragment>
  );
};

export default ProductTable;
