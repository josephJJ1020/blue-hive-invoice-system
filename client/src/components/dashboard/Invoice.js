import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useDispatch } from "react-redux";
import { setActiveInvoiceId } from "../../store/slices/invoiceSlice";
import { setEditingInvoiceTrue } from "../../store/slices/globalSlice";

const Invoice = ({ item }) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    dispatch(setActiveInvoiceId(item.number));
    dispatch(setEditingInvoiceTrue())
  };
  return (
    <Row>
      <Col>{item.number}</Col>
      <Col>{item.date}</Col>
      <Col>{item.customerLastName}</Col>
      <Col>
        <select name="" id="">
          {item.products.map((product, _) => {
            return (
              <option value={product.name}>
                {product.qty}pc {product.name} - {product.price}
              </option>
            );
          })}
        </select>
      </Col>
      <Col>
        <strong>{item.total}</strong>
      </Col>
      <Col>{item.status}</Col>
      <Col>
        <Button variant="primary" onClick={handleEditClick}>Edit</Button>
        <Button variant="danger">Delete</Button>
      </Col>
    </Row>
  );
};

export default Invoice;
