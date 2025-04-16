import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { getPoCs, savePoCs } from '../utils';
import { PoC } from '../types';
import { useState } from 'react';

export default function AddPoC() {
  const navigate = useNavigate();
  const [form, setForm] = useState<Omit<PoC, 'id'>>({
    title: '',
    client: '',
    useCase: '',
    features: [],
    sharepointSite: '',
    status: 'Not Started',
    outcome: 'Success',
    dateCreated: new Date().toISOString(),
    notes: ''
  });

  const handleSubmit = () => {
    const all = getPoCs();
    all.push({ id: uuidv4(), ...form });
    savePoCs(all);
    navigate('/');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">New PoC</h1>
      <input type="text" placeholder="Title" className="input" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
      {/* Add other form fields similarly */}
      <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 mt-4 rounded">Save</button>
    </div>
  );
}
