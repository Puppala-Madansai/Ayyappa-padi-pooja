import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import PoojaCard from "../components/PoojaCard.jsx";

export default function Poojas() {
  const [poojas, setPoojas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "poojas"), orderBy("date", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setPoojas(items);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const now = new Date();
  const upcoming = poojas.filter(p => {
    const dt = p.date?.toDate ? p.date.toDate() : new Date(p.date);
    return dt >= now;
  });
  const completed = poojas.filter(p => {
    const dt = p.date?.toDate ? p.date.toDate() : new Date(p.date);
    return dt < now;
  }).sort((a,b)=>{
    const ad = a.date?.toDate ? a.date.toDate() : new Date(a.date);
    const bd = b.date?.toDate ? b.date.toDate() : new Date(b.date);
    return bd - ad; // latest completed first
  });

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold text-ayyappa-orange mb-3">Upcoming Poojas</h2>
        {loading ? (
          <div>Loading...</div>
        ) : upcoming.length === 0 ? (
          <div className="card p-4 text-gray-600">No upcoming poojas yet 🙏</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {upcoming.map(p => <PoojaCard key={p.id} pooja={p} />)}
          </div>
        )}
      </section>

      <section>
        <h2 className="text-2xl font-bold text-ayyappa-blue mb-3">Completed Poojas</h2>
        {loading ? (
          <div>Loading...</div>
        ) : completed.length === 0 ? (
          <div className="card p-4 text-gray-600">No poojas completed yet 🙏</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {completed.map(p => <PoojaCard key={p.id} pooja={p} completed />)}
          </div>
        )}
      </section>
    </div>
  );
}
