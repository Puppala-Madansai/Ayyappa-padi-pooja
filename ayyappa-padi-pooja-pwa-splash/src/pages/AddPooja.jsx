import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Calendar, MapPin, User, Upload, Phone, Type, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import { LOCATION_DATA } from "../utils/locationData";
import { notifyNewPooja } from "../utils/notificationService";

export default function AddPooja() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [pooja, setPooja] = useState({
    title: "Ayyappa Padi Pooja",
    organizer: "",
    contact: "",
    state: "",
    district: "",
    mandal: "",
    village: "",
    venue: "",
    address: "",
    date: "",
    description: "",
  });
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  const handleChange = (e) => setPooja({ ...pooja, [e.target.name]: e.target.value });

  // Enhanced location change handlers
  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    setPooja({
      ...pooja, 
      state: selectedState, 
      venue: selectedState ? `${selectedState}` : ""
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setMsg("");
    setLoading(true);
    try {
      // Require authentication
      if (!user?.uid) {
        setErr("You must be logged in to add a pooja.");
        setLoading(false);
        return;
      }
      // Create the pooja document immediately without waiting for image upload.
      const basePayload = {
        ...pooja,
        date: new Date(pooja.date),
        imageUrl: "",
        createdBy: user.uid,
        createdAt: serverTimestamp(),
        venue: pooja.venue || [pooja.state, pooja.district, pooja.mandal, pooja.village].filter(Boolean).join(", "),
      };

      // Add the pooja to Firestore immediately so onSnapshot listeners receive it right away
      const docRef = await addDoc(collection(db, "poojas"), basePayload);

      // Reset form/UI quickly
      setMsg("🙏 Pooja added successfully! Notification queued.");
      setPooja({ title: "Ayyappa Padi Pooja", organizer: "", contact: "", state: "", district: "", mandal: "", village: "", venue: "", address: "", date: "", description: "" });

      // Redirect to My Poojas immediately so user sees their list
      navigate("/my");

      // Send notifications in background (fire-and-forget) so the UI isn't blocked
      notifyNewPooja({ id: docRef.id, ...basePayload })
        .then(() => console.log("Notification sent successfully"))
        .catch((notificationError) => console.warn("Failed to send notification:", notificationError));
    } catch (e) {
      console.error("AddPooja error:", e);
      setErr(e?.message || "Failed to add pooja. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Get available states for dropdown
  const availableStates = Object.keys(LOCATION_DATA);

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="card p-6">
        <h2 className="text-2xl font-bold text-ayyappa-blue text-center mb-4">🛕 Add Ayyappa Padi Pooja</h2>
        {msg && <div className="text-green-700 text-sm mb-2">{msg}</div>}
        {err && <div className="text-red-600 text-sm mb-2">{err}</div>}
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold flex items-center gap-2"><Type size={18}/> Title</label>
            <input name="title" value={pooja.title} onChange={handleChange} className="w-full p-3 rounded-xl border" required/>
          </div>
          <div>
            <label className="font-semibold flex items-center gap-2"><User size={18}/> Organizer</label>
            <input name="organizer" value={pooja.organizer} onChange={handleChange} className="w-full p-3 rounded-xl border" required/>
          </div>
          <div>
            <label className="font-semibold flex items-center gap-2"><Phone size={18}/> Contact (Phone / Email)</label>
            <input name="contact" value={pooja.contact} onChange={handleChange} className="w-full p-3 rounded-xl border" required/>
          </div>

          {/* Enhanced Location pickers */}
          <div>
            <label className="font-semibold flex items-center gap-2">
              <MapPin size={18}/> State
              {pooja.state && <span className="text-green-600 text-xs">✓ Selected</span>}
            </label>
            <div className="relative">
              <select 
                name="state" 
                value={pooja.state} 
                onChange={handleStateChange} 
                className="w-full p-3 rounded-xl border appearance-none bg-white" 
                required
              >
                <option value="">Select State</option>
                {availableStates.map(state => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>
          </div>
          
          <div>
            <label className="font-semibold">District</label>
            <input 
              name="district" 
              value={pooja.district} 
              onChange={handleChange} 
              className="w-full p-3 rounded-xl border" 
              placeholder="Enter district name" 
              required
            />
          </div>
          
          <div>
            <label className="font-semibold">Mandal</label>
            <input 
              name="mandal" 
              value={pooja.mandal} 
              onChange={handleChange} 
              className="w-full p-3 rounded-xl border" 
              placeholder="Enter mandal name" 
              required
            />
          </div>
          
          <div>
            <label className="font-semibold">Village</label>
            <input 
              name="village" 
              value={pooja.village} 
              onChange={handleChange} 
              className="w-full p-3 rounded-xl border" 
              placeholder="Enter village name" 
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="font-semibold">Complete Address (Temple, Street, Landmark)</label>
            <textarea name="address" value={pooja.address} onChange={handleChange} className="w-full p-3 rounded-xl border" rows={2} required/>
          </div>
          
          <div>
            <label className="font-semibold flex items-center gap-2"><Calendar size={18}/> Date & Time</label>
            <input type="datetime-local" name="date" value={pooja.date} onChange={handleChange} className="w-full p-3 rounded-xl border" required/>
          </div>
          
          <div className="md:col-span-2">
            <label className="font-semibold">Description</label>
            <textarea name="description" value={pooja.description} onChange={handleChange} className="w-full p-3 rounded-xl border" rows={3} />
          </div>
          
          {/* Flyer upload removed to speed up add flow */}
        </div>
        
        <button disabled={loading} className="btn-primary w-full mt-4">
          {loading ? "Adding..." : "🙏 Add Pooja"}
        </button>
      </form>
    </div>
  );
}
