import { PoC } from '../types';
import { Link } from 'react-router-dom';

export default function PoCCard({ poc }: { poc: PoC }) {
  return (
    <div className="border rounded p-4 shadow bg-white">
      <h2 className="text-lg font-bold">{poc.title}</h2>
      <p className="text-sm">Client: {poc.client}</p>
      <p>Status: {poc.status}</p>
      <p>Outcome: {poc.outcome}</p>
      <Link to={`/edit/${poc.id}`} className="text-blue-600 underline text-sm mt-2 inline-block">
        Edit
      </Link>
    </div>
  );
}
