import React from 'react';
import Link from 'next/link';

interface Upload {
  date: string;
  fileName: string;
  summary: string;
  link: string;
}

const uploads: Upload[] = [
  {
    date: '2024-07-19',
    fileName: 'example.txt',
    summary: 'Brief summary...',
    link: '/summary',
  },
  // Add more example uploads if needed
];

const History: React.FC = () => {
  return (
    <main className="px-4 py-8 max-w-7xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Upload History</h1>
        <p className="text-lg text-gray-600">View your past uploads and their analysis results.</p>
      </header>

      <section>
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">File Name</th>
              <th className="py-2 px-4 border-b">Summary</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {uploads.map((upload, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{upload.date}</td>
                <td className="py-2 px-4 border-b">{upload.fileName}</td>
                <td className="py-2 px-4 border-b">{upload.summary}</td>
                <td className="py-2 px-4 border-b">
                  <Link href={upload.link}>
                    <a className="text-blue-500 hover:underline">View</a>
                  </Link>
                  <button className="text-red-500 hover:underline ml-4">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default History;