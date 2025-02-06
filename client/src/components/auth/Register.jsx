import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ successMessage, setSuccessMessage ] = useState("");
  const [ errorMessage, setErrorMessage ] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post("http://localhost:3001/auth/register", {
            username,
            password
        });
        if (response.data.message === "User already exist!") {
            setErrorMessage("User already taken!");
        } else {
          setSuccessMessage("Registeration Completed, Now Login!");
          setUsername("");
          setPassword("");
        }
    } catch (err) {
        console.error(err);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Register</h1>
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
        {successMessage ? <p className='text-green-500 font-medium my-4'>{successMessage}</p> : <p className='text-red-500 font-medium my-4'>{errorMessage}</p>}
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white text-lg font-semibold py-2 rounded-xl shadow-lg hover:bg-blue-600 transition-colors duration-200"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
