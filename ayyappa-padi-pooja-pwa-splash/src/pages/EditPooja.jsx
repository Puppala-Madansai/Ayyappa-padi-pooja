import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db, storage } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { useAuth } from "../contexts/AuthContext.jsx";
import { LOCATION_DATA } from "../utils/locationData";
import { MapPin, ChevronDown } from "lucide-react";
import { notifyUpcomingPooja } from "../utils/notificationService";

export default function EditPooja() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [file, setFile] = useState(null);
  const [pooja, setPooja] = useState(null);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const snap = await getDoc(doc(db, "poojas", id));
        if (!snap.exists()) {
          setErr("Pooja not found");
        } else {
          const data = snap.data();
          if (data.createdBy !== user?.uid) setErr("You are not allowed to edit this pooja.");
          setPooja({
            ...data,
            date: data.date?.toDate ? data.date.toDate().toISOString().slice(0, 16) : data.date,
          });
        }
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id, user?.uid]);

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

  const handleSave = async (e) => {
    e.preventDefault();
    if (!pooja) return;
    setSaving(true);
    try {
      let imageUrl = pooja.imageUrl || "";

      if (file) {
        // delete old if exists
        try {
          if (imageUrl) {
            // extract path from download URL
            const path = decodeURIComponent(imageUrl.match(/o\/(.*?)\?/)[1]);
            const oldRef = ref(storage, path);
            await deleteObject(oldRef);
          }
        } catch (err) {
          console.warn("Failed to delete old file:", err);
        }

        // upload new
        const path = `flyers/${user.uid}/${Date.now()}_${file.name}`;
        const rf = ref(storage, path);
        await uploadBytes(rf, file);
        imageUrl = await getDownloadURL(rf);
      }

      const payload = {
        ...pooja,
        date: new Date(pooja.date),
        imageUrl,
      };
      
      // Update the pooja in Firestore
      await updateDoc(doc(db, "poojas", id), payload);

      // Navigate immediately to avoid blocking the UI
      navigate("/my");

      // Send notification about the updated pooja in background (fire-and-forget)
      notifyUpcomingPooja({ id: id, ...payload })
        .then(() => console.log("Update notification sent successfully"))
        .catch((notificationError) => console.warn("Failed to send update notification:", notificationError));
    } catch (e) {
      setErr(e.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6 text-center">Loading...</div>;
  if (err) return <div className="p-6 text-center text-red-600">{err}</div>;
  if (!pooja) return null;

  // Get available states for dropdown
  const availableStates = Object.keys(LOCATION_DATA);

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSave} className="card p-6">
        <h2 className="text-2xl font-bold text-ayyappa-blue text-center mb-4">Edit Pooja</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="font-semibold">Title</label>
            <input
              name="title"
              value={pooja.title}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border"
              required
            />
          </div>
          <div>
            <label className="font-semibold">Organizer</label>
            <input
              name="organizer"
              value={pooja.organizer}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border"
              required
            />
          </div>
          <div>
            <label className="font-semibold">Contact</label>
            <input
              name="contact"
              value={pooja.contact}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border"
              required
            />
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
                {availableStates.map((s) => (
                  <option key={s} value={s}>
                    {s}
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
            <label className="font-semibold">Complete Address</label>
            <textarea
              name="address"
              value={pooja.address}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border"
              rows={2}
              required
            />
          </div>
          <div>
            <label className="font-semibold">Date & Time</label>
            <input
              type="datetime-local"
              name="date"
              value={pooja.date}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border"
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="font-semibold">Description</label>
            <textarea
              name="description"
              value={pooja.description}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border"
              rows={3}
            />
          </div>
          <div className="md:col-span-2">
            <label className="font-semibold">Replace Flyer (optional)</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
            />
          </div>
        </div>
        <button disabled={saving} className="btn-primary w-full mt-4">
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
