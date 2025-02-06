import Register from "../components/auth/Register";
import Login from "../components/auth/Login";

const Auth = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 bg-gray-100 min-h-screen p-6">
      <div className="w-full lg:w-1/2 max-w-md">
        <Login />
      </div>
      <div className="w-full lg:w-1/2 max-w-md">
        <Register />
      </div>
    </div>
  );
};

export default Auth;
