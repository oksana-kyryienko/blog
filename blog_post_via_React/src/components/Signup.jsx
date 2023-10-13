import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { validateSignup } from "./helpers/validate";
import { useUser } from "../useUser";

export const Signup = () => {
  const { updateUser } = useUser();
  const [values, setValues] = useState({
    email: "",
    password: "",
    name: "",
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
        if (
          errors.name !== "" ||
          errors.email !== "" ||
          errors.password !== ""
        ) {
          return;
        }

        // eslint-disable-next-line no-unused-vars
        const res = await axios.post("http://localhost:8081/signup", values);
        updateUser(values);
        navigate("/");
      } catch (err) {
        console.log(err);
      }
    };

    handleErrorsChange();

    return () => {};
  }, [errors, navigate, updateUser, values]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validateSignup(values));
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              className="form-control rounded-0"
              type="text"
              placeholder="Enter a name"
              name="name"
              onChange={handleInput}
              autoComplete="name"
            />
            {errors.name && <span className="text-danger">{errors.name}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              className="form-control rounded-0"
              type="email"
              placeholder="Enter an email"
              name="email"
              onChange={handleInput}
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
              className="form-control rounded-0"
              type="password"
              placeholder="Enter a password"
              name="password"
              autoComplete="current-password"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            <strong>Sign up</strong>
          </button>
          <p>You are agree to our terms and policies</p>
          <Link
            to="/"
            className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none"
          >
            Log in
          </Link>
        </form>
      </div>
    </div>
  );
};
