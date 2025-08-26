import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await login(email, password);
      navigate("/add");
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div className="max-w-md mx-auto card p-6">
      <h2 className="text-2xl font-bold text-ayyappa-blue text-center mb-4">Login</h2>
      {err && <div className="text-red-600 text-sm mb-2">{err}</div>}
      <form onSubmit={onSubmit} className="space-y-3">
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-3 rounded-xl border" required/>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-3 rounded-xl border" required/>
        <button className="btn-primary w-full">Login</button>
      </form>
      <p className="text-sm mt-3 text-center">No account? <Link className="text-ayyappa-orange font-semibold" to="/signup">Sign up</Link></p>
    </div>
  );
}
