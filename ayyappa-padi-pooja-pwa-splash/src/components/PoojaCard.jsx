import React from "react";
import { Calendar, MapPin, User, Phone, CheckCircle, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext.jsx";
import { db, storage } from "../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { deleteObject, ref as sRef } from "firebase/storage";

export default function PoojaCard({ pooja, completed=false }) {
  const { user } = useAuth();
  const date = pooja.date?.toDate ? pooja.date.toDate() : new Date(pooja.date);

  const canEdit = user?.uid === pooja.createdBy;

  const handleDelete = async () => {
    if (!canEdit) return;
    if (!confirm("Delete this pooja?")) return;

    try {
      // ✅ Correct way: get storage ref from the image URL
      if (pooja.imageUrl) {
        const storagePath = pooja.imageUrl.split("/o/")[1]?.split("?")[0]; 
        if (storagePath) {
          const decodedPath = decodeURIComponent(storagePath);
          const r = sRef(storage, decodedPath);
          await deleteObject(r);
        }
      }
    } catch (e) {
      console.warn("Storage delete issue:", e);
    }

    await deleteDoc(doc(db, "poojas", pooja.id));
  };

  return (
    <div className="card p-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-bold text-ayyappa-blue">{pooja.title || "Ayyappa Padi Pooja"}</h3>
          <div className="mt-2 space-y-1 text-sm">
            <div className="flex items-center gap-2"><Calendar size={16}/> {date.toLocaleString()}</div>
            <div className="flex items-center gap-2"><MapPin size={16}/> {pooja.venue} {pooja.village ? (", " + pooja.village) : ""}</div>
            <div className="flex items-center gap-2"><User size={16}/> {pooja.organizer}</div>
            <div className="flex items-center gap-2"><Phone size={16}/> {pooja.contact}</div>
            <div className="text-gray-700">{pooja.address}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {completed && <div className="flex items-center gap-1 text-green-700 font-semibold"><CheckCircle/> Completed</div>}
          {canEdit && (
            <>
              <Link to={`/edit/${pooja.id}`} className="px-2 py-1 rounded bg-blue-600 text-white inline-flex items-center gap-1"><Pencil size={14}/> Edit</Link>
              <button onClick={handleDelete} className="px-2 py-1 rounded bg-red-600 text-white inline-flex items-center gap-1"><Trash2 size={14}/> Delete</button>
            </>
          )}
        </div>
      </div>
      {pooja.imageUrl && (
        <img src={pooja.imageUrl} alt="Pooja Flyer" className="mt-3 rounded-xl max-h-64 object-cover w-full"/>
      )}
      {pooja.description && (
        <p className="mt-3 text-sm text-gray-700">{pooja.description}</p>
      )}
    </div>
  );
}
