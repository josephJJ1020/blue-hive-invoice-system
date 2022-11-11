import AuthForm from "./AuthForm";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section className="container">
      <h1>Sign Up</h1>
      <AuthForm />
      <p>Have an account? <Link to={'/login'}>Log in</Link> </p>
    </section>
  );
};

export default SignUp;
