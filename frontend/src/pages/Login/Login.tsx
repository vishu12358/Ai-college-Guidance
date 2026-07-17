import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      email,
      password,
    });

    alert("Login Successful!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">

        <h1 className="text-3xl font-bold text-center text-blue-600">
          Welcome Back 👋
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Login to your CollegeAI account
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">

          <Input
            label="Email Address"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
          />

          <Input
            label="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
          />

          <div className="flex justify-between items-center text-sm">

            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <button
              type="button"
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </button>

          </div>

          <Button type="submit">
            Login
          </Button>

        </form>

        <p className="text-center mt-6 text-gray-600">
          Don't have an account?

          <Link
            to="/register"
            className="text-blue-600 font-semibold ml-2 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;