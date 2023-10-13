import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { validateLogin } from "./helpers/validate";

export const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    const handleErrorsChange = async () => {
      try {
        if (errors.email !== "" || errors.password !== "") {
          return;
        }

        const res = await axios.post("http://localhost:8081/login", values);
        if (res.data === "Success") {
          navigate("/home/*");
        } else {
          alert("No record exists");
        }
      } catch (err) {
        console.log(err);
      }
    };

    handleErrorsChange();

    return () => {};
  }, [errors, navigate, values]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateLogin(values));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              onChange={handleInput}
              className="form-control rounded-0"
              type="email"
              placeholder="Enter an email"
              name="email"
              autoComplete="email"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              onChange={handleInput}
              className="form-control rounded-0"
              type="password"
              placeholder="Enter a password"
              name="password"
              autoComplete="current-password"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Log in</strong>
          </button>
          <p>You are agree to our terms and policies</p>
          <Link
            to="/signup"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
};
