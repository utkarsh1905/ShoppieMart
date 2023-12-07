import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../../../components/Toast";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    loginSuccess: false,
    loginError: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username.trim(),
          password: formData.password.trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed.");
      }

      const json = await response.json();

      if (json.token) {
        console.log(
          `Username: ${formData.username}, Password: ${formData.password}`
        );
        setFormData({
          ...formData,
          loginSuccess: true,
          loginError: false,
        });
        navigate("/products");
      }
    } catch (error) {
      setFormData({
        ...formData,
        loginSuccess: false,
        loginError: true,
      });
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-9/12 p-6 m-auto bg-gray-800 rounded-lg shadow">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign in
        </h1>
        <form className="mt-6 form-control" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="userName"
              className="text-sm font-semibold text-white label-text"
            >
              Username
            </label>
            <input
              type="text"
              id="userName"
              name="username"
              className="block w-full mt-2 text-purple-700 bg-white border rounded-md input input-bordered focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="text-sm font-semibold text-white label-text"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="block w-full mt-2 text-purple-700 bg-white border rounded-md input input-bordered focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <a
            href="#"
            className="text-xs text-purple-600 label-text hover:underline"
          >
            Forgot Password?
          </a>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white transition-colors bg-purple-700 rounded-md btn hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700 text-gray-900 dark:text-white">
          Do not have an account?{" "}
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Sign up
          </a>
          <p className="mt-2 text-xs font-light text-center text-gray-700 text-gray-900 dark:text-white">
            Username:(mor_2314), Password:(83r5^_)
          </p>
        </p>
      </div>
      {formData.loginError && (
        <Toast type="error" message="Incorrect Username or Password." />
      )}
      {formData.loginSuccess && (
        <Toast type="success" message="Login success." />
      )}
    </div>
  );
}
