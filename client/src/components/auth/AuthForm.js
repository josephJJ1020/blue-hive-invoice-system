import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useInput } from "../hooks/useInput";
import { useSelector } from "react-redux";
import fetchUser from "../../actions/fetchUser";
import validateUsername from "../../actions/validateUsername";
import validatePassword from "../../actions/validatePassword";

import { useDispatch } from "react-redux";

const LogInForm = () => {
  const [usernameProps, resetUsername] = useInput("");
  const [pwProps, resetPw] = useInput("");

  const { authStatus } = useSelector((state) => state.auth);

  const submit = async (e) => {
    e.preventDefault();

    const trimmedUsername = usernameProps.value.trim();
    const trimmedPw = pwProps.value.trim();

    if (!validateUsername(trimmedUsername)) {
      console.log("invalid username");
      return;
    }

    if (!validatePassword(trimmedPw)) {
      return;
    }

    const res = await fetchUser(authStatus, trimmedUsername, trimmedPw);
    console.log(res);
    resetUsername();
    resetPw();

    // window.location.reload();
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          {...usernameProps}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...pwProps} />
      </Form.Group>

      <Button variant="primary" type="submit" onClick={(e) => submit(e)}>
        Submit
      </Button>
    </Form>
  );
};

export default LogInForm;
