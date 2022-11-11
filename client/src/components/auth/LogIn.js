import AuthForm from "./AuthForm";
import { Link } from "react-router-dom";

const LogIn = () => {
  return (
    <section className="container">
      <h1>Log In</h1>
      <AuthForm />
      <p>
        Don't have an account? <Link to={"/signup"}>Sign Up</Link>{" "}
      </p>
    </section>
  );
};

export default LogIn;
