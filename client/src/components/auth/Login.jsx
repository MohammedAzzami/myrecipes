import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [, setCookies] = useCookies(['access_token']);

  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        username,
        password
      });
      if (response.data.message === "User Doesn't Exist!" || response.data.message === "Username or Password is Incorrect!") {
        setErrorMessage(response.data.message);
      } else {
        setCookies("access_token", response.data.token);
        window.localStorage.setItem("userId", response.data.userId);
        window.localStorage.setItem("username", response.data.username);
        navigate("/");
        window.location.reload();
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h1>
      <form className="flex flex-col gap-6" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label
            htmlFor="username"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Username:
          </label>
          <input
            className="border rounded-xl pl-4 py-2 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="username"
            onChange={handleUsername}
            value={username}
            placeholder="Enter your username"
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-lg font-medium text-gray-700 mb-2"
          >
            Password:
          </label>
          <input
            className="border rounded-xl pl-4 py-2 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            id="password"
            onChange={handlePassword}
            value={password}
            placeholder="Enter your password"
          />
        </div>

        {errorMessage && <p className='text-red-500 font-medium my-4'>{errorMessage}</p>}

        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white text-lg font-semibold py-2 rounded-xl shadow-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
