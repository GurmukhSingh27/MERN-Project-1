import { useState } from "react";

const Login = ({ updateUserDetails }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const [errors, setErrors] = useState({});

  const [message, setMessage] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let newErrors = {};
    let isValid = true;
    if (formData.username.length === 0) {
      newErrors.username = "Username is mandatory";
      isValid = false;
    }
    if (formData.password.length === 0) {
      newErrors.passworde = "Password is mandatory";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      if (formData.username === "admin" && formData.password === "admin") {
        setMessage("Correct credentials");
        //User is authenticated navigate to his/her dashboard
        updateUserDetails({
          name: "John Cena",
          email: "john@cena.com",
        });
      } else {
        setMessage("Invalid credentials");
      }
    }
  };

  return (
    <>
      <div className="container text-center">
        <h1>Login Page</h1>
        {message && message}
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && errors.username}
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && errors.password}
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
