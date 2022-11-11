import { useSelector, useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import {
  setAddingInvoiceFalse,
  setError,
} from "../../store/slices/globalSlice";
import { useInput } from "../hooks/useInput";
import addInvoice from "../../actions/addInvoice";

import { useState } from "react";
import { setInvoices } from "../../store/slices/invoiceSlice";

const AddInvoice = () => {
  const { addingInvoice } = useSelector((state) => state.global);
  const { invoices } = useSelector((state) => state.invoice);
  const dispatch = useDispatch();

  const show = addingInvoice;

  const [firstNameProps, resetFirstName] = useInput("");
  const [lastNameProps, resetLastName] = useInput("");
  const [products, setProducts] = useState([]);

  const [addProduct, setAddProduct] = useState(false);
  const [currAddProduct, setCurrAddProduct] = useState({
    qty: 0,
    name: "",
    price: 0,
  });

  const handleAddProduct = () => {
    console.log("clicked");
    if (
      currAddProduct.qty > 0 &&
      currAddProduct.name.length &&
      currAddProduct.price > 0
    ) {
      setProducts([...products, currAddProduct]);
      setCurrAddProduct({ qty: 0, name: "", price: 0 });
    }
    setAddProduct(true);
  };

  const handleClose = () => {
    dispatch(setAddingInvoiceFalse());
  };

  const submit = async () => {
    const newInvoice = await addInvoice(
      firstNameProps.value,
      lastNameProps.value,
      products
    );

    if (newInvoice.error) {
      dispatch(setError(newInvoice.error));
      dispatch(setAddingInvoiceFalse());
      return;
    }

    dispatch(setInvoices([...invoices, newInvoice]));
    dispatch(setAddingInvoiceFalse());
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Invoice</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>First Name</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Customer's first name"
              {...firstNameProps}
              autoFocus
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Last Name</strong>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Customer's last name"
              {...lastNameProps}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              <strong>Products</strong>
            </Form.Label>
            <Row>
              <Col>Qty</Col>
              <Col>Name</Col>
              <Col>Price</Col>
              <Col></Col>
            </Row>
            {products &&
              products.map((product, _) => {
                return (
                  <Row>
                    <Col>{product.qty}</Col>
                    <Col>{product.name}</Col>
                    <Col>{product.price}</Col>
                    <Col>
                      <Button variant="danger">Delete</Button>
                    </Col>
                  </Row>
                );
              })}
            {addProduct && (
              <Row>
                <Col>
                  <Form.Control
                    type="number"
                    value={currAddProduct.qty}
                    onChange={(e) =>
                      setCurrAddProduct({
                        ...currAddProduct,
                        qty: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="text"
                    value={currAddProduct.name}
                    onChange={(e) =>
                      setCurrAddProduct({
                        ...currAddProduct,
                        name: e.target.value,
                      })
                    }
                  />
                </Col>
                <Col>
                  <Form.Control
                    type="number"
                    value={currAddProduct.price}
                    onChange={(e) =>
                      setCurrAddProduct({
                        ...currAddProduct,
                        price: e.target.value,
                      })
                    }
                  />
                </Col>
              </Row>
            )}
            <Button variant="primary" onClick={handleAddProduct}>
              Add product
            </Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={submit}>
          Add Invoice
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddInvoice;
