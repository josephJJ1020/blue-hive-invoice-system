import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import TopNav from "../nav/TopNav";

const Dashboard = () => {
  const { username } = useSelector((state) => state.user);
  return (
    <section className="container Dashboard">
      <TopNav />
      <section className="main">
        <header>
          <h1>Hello, {username}!</h1>
        </header>
        <section className="content">
          <Button
            variant="primary"
            onClick={() => {
              window.location = "/invoice";
            }}
          >
            Invoices
          </Button>
        </section>
      </section>
    </section>
  );
};

export default Dashboard;
