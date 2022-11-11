import TopNav from "../nav/TopNav";
import Invoice from "./Invoice";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { useSelector, useDispatch } from "react-redux";
import EditInvoice from "./EditInvoice";
import { setAddingInvoiceTrue } from "../../store/slices/globalSlice";
import AddInvoice from "./AddInvoice";

const invoices = [
  {
    number: "1335Z9",
    date: "2017-10-10",
    customerLastName: "Fernando",
    products: [
      { name: "Item1", qty: 1, price: "10 PHP" },
      { name: "Item2", qty: 1, price: "10 PHP" },
    ],
    total: "20 PHP",
    status: "PENDING",
  },
  {
    number: "1335Z9",
    date: "2017-10-10",
    customerLastName: "Fernando",
    products: [
      { name: "Item1", qty: 1, price: "10" },
      { name: "Item2", qty: 1, price: "10" },
    ],
    total: "20",
    status: "PENDING",
  },
];

const Invoices = () => {
  const { editingInvoice, addingInvoice } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();

  return (
    <section className="container Invoices">
      {addingInvoice && <AddInvoice />}
      {editingInvoice && <EditInvoice />}
      <TopNav />
      <header>
        <section className="Logo">
          <h1>Invoices</h1>
        </section>
        <section className="Actions">
          <select name="" id="">
            <option value="DATE" defaultValue>
              Sort by Date
            </option>
            <option value="FIRSTNAME">Sort by First Name</option>
            <option value="LASTNAME">Sort by Last Name</option>
          </select>
          <Button
            variant="primary"
            onClick={() => dispatch(setAddingInvoiceTrue())}
          >
            Add Invoice
          </Button>
        </section>
      </header>
      <section className="Content">
        <Container fluid>
          {invoices.map((item, index) => {
            return (
              <>
                <Invoice item={item} key={index} />
              </>
            );
          })}
        </Container>
      </section>
    </section>
  );
};

export default Invoices;
