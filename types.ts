export type PoC = {
  id: string;
  title: string;
  client: string;
  useCase: string;
  features: string[];
  sharepointSite: string;
  status: 'Not Started' | 'In Progress' | 'Blocked' | 'Completed';
  outcome: 'Success' | 'Needs Work' | 'Not Adopted';
  dateCreated: string;
  notes: string;
};
