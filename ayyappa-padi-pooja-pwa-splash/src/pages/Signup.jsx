import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";

export default function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [err, setErr] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    if (password !== confirm) return setErr("Passwords do not match");
    try {
      await signup(name, email, password);
      navigate("/add");
    } catch (e) {
      setErr(e.message);
    }
  };

  return (
    <div className="max-w-md mx-auto card p-6">
      <h2 className="text-2xl font-bold text-ayyappa-blue text-center mb-4">Create Account</h2>
      {err && <div className="text-red-600 text-sm mb-2">{err}</div>}
      <form onSubmit={onSubmit} className="space-y-3">
        <input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Full Name" className="w-full p-3 rounded-xl border" required/>
        <input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="Email" className="w-full p-3 rounded-xl border" required/>
        <input value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" className="w-full p-3 rounded-xl border" required/>
        <input value={confirm} onChange={e=>setConfirm(e.target.value)} type="password" placeholder="Confirm Password" className="w-full p-3 rounded-xl border" required/>
        <button className="btn-gold w-full">Sign Up</button>
      </form>
      <p className="text-sm mt-3 text-center">Already have an account? <Link className="text-ayyappa-orange font-semibold" to="/login">Login</Link></p>
    </div>
  );
}
