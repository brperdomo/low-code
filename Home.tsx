import { useEffect, useState } from 'react';
import { PoC } from '../types';
import { getPoCs } from '../utils';
import PoCCard from '../components/PoCCard';
import Filters from '../components/Filters';
import { Link } from 'react-router-dom';

export default function Home() {
  const [pocs, setPoCs] = useState<PoC[]>([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [outcomeFilter, setOutcomeFilter] = useState('');

  useEffect(() => {
    setPoCs(getPoCs());
  }, []);

  const filtered = pocs.filter(p =>
    (!statusFilter || p.status === statusFilter) &&
    (!outcomeFilter || p.outcome === outcomeFilter)
  );

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">All PoCs</h1>
        <Link to="/add" className="bg-blue-600 text-white px-4 py-2 rounded">+ New</Link>
      </div>
      <Filters {...{ statusFilter, setStatusFilter, outcomeFilter, setOutcomeFilter }} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(poc => <PoCCard key={poc.id} poc={poc} />)}
      </div>
    </div>
  );
}
