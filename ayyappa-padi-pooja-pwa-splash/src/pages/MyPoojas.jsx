import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy, where } from "firebase/firestore";
import { useAuth } from "../contexts/AuthContext.jsx";
import PoojaCard from "../components/PoojaCard.jsx";

export default function MyPoojas() {
  const { user, loading } = useAuth();
  const [poojas, setPoojas] = useState([]);
  const [loadingList, setLoadingList] = useState(true);

  useEffect(() => {
    if (!user) return;
    const q = query(collection(db, "poojas"), where("createdBy", "==", user.uid), orderBy("date", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setPoojas(items);
      setLoadingList(false);
    });
    return () => unsub();
  }, [user]);

  if (loading) return <div className="p-6 text-center">Loading...</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-ayyappa-blue">My Poojas</h2>
      {loadingList ? (
        <div>Loading...</div>
      ) : poojas.length === 0 ? (
        <div className="card p-4 text-gray-600">You haven't added any poojas yet.</div>
      ) : (
        <div className="grid md:grid-cols-2 gap-4">
          {poojas.map(p => <PoojaCard key={p.id} pooja={p} />)}
        </div>
      )}
    </div>
  );
}
