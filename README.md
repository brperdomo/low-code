# PoC Tracker
PoC Tracker for Low Code + SharePoint

This is a web-based Proof of Concept (PoC) Tracker built with React and Tailwind CSS. It mirrors the functionality of a low-code Power App solution,
allowing users to track and manage PoCs for SharePoint and Muhimbi integrations.

🛠️ Tech Stack

- React (Vite for fast development)
- Tailwind CSS for styling
- LocalStorage for data persistence\

🚀 Features

- Add, view, edit, and delete PoCs
- Filter by Status and Outcome
- Search by PoC name or use case
- Store data in browser (LocalStorage)
- Modular and extensible architecture

DATA MODEL

export type PoC = {
  id: string;
  title: string;
  client: string;
  useCase: string;
  features: string[];
  sharepointSite: string;
  status: 'Not Started' | 'In Progress' | 'Blocked' | 'Completed';
  outcome: 'Success' | 'Needs Work' | 'Not Adopted';
  dateCreated: string; // ISO string
  notes: string;
};

📦 How to Run Locally
git clone https://github.com/brperdomo/poc-tracker.git
cd poc-tracker
npm install
npm run dev
