export default function Filters({ statusFilter, setStatusFilter, outcomeFilter, setOutcomeFilter }: any) {
  return (
    <div className="flex gap-4 my-4">
      <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
        <option value="">All Statuses</option>
        <option>Not Started</option>
        <option>In Progress</option>
        <option>Blocked</option>
        <option>Completed</option>
      </select>
      <select value={outcomeFilter} onChange={e => setOutcomeFilter(e.target.value)}>
        <option value="">All Outcomes</option>
        <option>Success</option>
        <option>Needs Work</option>
        <option>Not Adopted</option>
      </select>
    </div>
  );
}
