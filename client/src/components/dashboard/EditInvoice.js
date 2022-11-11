import { useSelector, useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import { setEditingInvoiceFalse } from "../../store/slices/globalSlice";
import { useInput } from "../hooks/useInput";

import { useState } from "react";

const EditInvoice = () => {
  const { editingInvoice } = useSelector((state) => state.global);
  const { invoices, activeInvoiceId } = useSelector((state) => state.invoice);
  const dispatch = useDispatch();

  const show = editingInvoice;

  const currentInvoice = invoices.find(
    (invoice) => invoice.number === activeInvoiceId
  );

  const [lastNameProps] = useInput(
    activeInvoiceId ? currentInvoice.customerLastName : ""
  );
  const [products, setProducts] = useState(activeInvoiceId
    ? [...currentInvoice.products]
    : []);
  const [addProduct, setAddProduct] = useState(false);
  const [currAddProduct, setCurrAddProduct] = useState({
    qty: 0,
    name: "",
    price: 0,
  });

  const handleAddProduct = () => {
    if (
      currAddProduct.qty > 0 &&
      currAddProduct.name.length &&
      currAddProduct.price > 0
    ) {
      setProducts([...products, currAddProduct]);
      setCurrAddProduct({ qty: 0, name: "", price: 0 });
      // tell backend that product has been added to invoice; change the invoice total
    }
    setAddProduct(true);
  };

  const handleClose = () => {
    dispatch(setEditingInvoiceFalse());
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Invoice {activeInvoiceId}</Modal.Title>
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
          <Form.Group className="mb-3">
            <Form.Label>
              <strong>Status</strong>
            </Form.Label>
            <Form.Select>
              <option defaultValue value="PENDING">
                PENDING
              </option>
              <option value="COMPLETED">COMPLETED</option>
              <option value="DELETED">DELETED</option>
            </Form.Select>
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
            {currentInvoice &&
              currentInvoice.products.map((product, _) => {
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
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditInvoice;
