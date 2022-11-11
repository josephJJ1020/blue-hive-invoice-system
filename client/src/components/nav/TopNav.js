import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <Navbar className="TopNav">
      <Container>
        <Navbar.Brand href="/">Invoice System</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Link to="/login">Log out</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
