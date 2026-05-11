import './App.css'
import { useState } from "react";

// Input component
function InputField({ label, type = "text", value, onChange, error }) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{label}</label>
      <input
        type={type}
        value={value}
        
        onChange={onChange}
        className={`w-full px-4 py-2 rounded border ${
          error ? "border-red-500" : "border-gray-300"
        } focus:outline-none focus:ring-2 focus:ring-blue-400`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

// Button component
function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
    >
      {text}
    </button>
  );
}

// Custom useForm hook
function useForm(initialValue = "", validateFn) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    if (validateFn) setError(validateFn(e.target.value));
  };

  const reset = () => {
    setValue("");
    setError("");
  };

  return { value, onChange, error, reset, setError };
}

// Validation functions
function required(value) {
  if (!value) return "Required";
  return "";
}

function minLength(value, n = 6) {
  if (value.length < n) return `Minimum ${n} characters`;
  return "";
}

// LoginForm component
function Login() {
  const username = useForm("", required);
  const password = useForm("", (v) => minLength(v, 6));

  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const uErr = required(username.value);
    const pErr = minLength(password.value, 6);

    username.setError(uErr);
    password.setError(pErr);

    if (!uErr && !pErr) {
      setMessage("Login Successful ✅");
    } else {
      setMessage("");
    }
  };

  const handleReset = () => {
    username.reset();
    password.reset();
    setMessage("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>

        <InputField
          label="Username"
         
          value={username.value}
          onChange={username.onChange}
          error={username.error}
        />

        <InputField
          label="Password"
          type="password"
          
          value={password.value}
          onChange={password.onChange}
          error={password.error}
        />

        <div className="flex justify-between mt-6">
          <Button text="Login" onClick={handleLogin} />
          <Button text="Reset" onClick={handleReset} />
        </div>

        {message && (
          <p className="text-green-600 text-center mt-4 font-semibold">{message}</p>
        )}
      </div>
    </div>
  );
}

export default Login;
