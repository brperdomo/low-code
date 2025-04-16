import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getPoCs, savePoCs } from '../utils';
import { PoC } from '../types';

export default function EditPoC() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState<PoC | null>(null);

  useEffect(() => {
    const all = getPoCs();
    const found = all.find(p => p.id === id);
    if (found) setForm(found);
  }, [id]);

  const handleSave = () => {
    const all = getPoCs().map(p => (p.id === form!.id ? form! : p));
    savePoCs(all);
    navigate('/');
  };

  if (!form) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Edit PoC</h1>
      <input type="text" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} className="input" />
      {/* Add more editable fields as needed */}
      <button onClick={handleSave} className="bg-blue-600 text-white px-4 py-2 mt-4 rounded">Save Changes</button>
    </div>
  );
}
