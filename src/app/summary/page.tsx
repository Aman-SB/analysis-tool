import React from 'react';

const Summary: React.FC = () => {
  return (
    <main className="px-4 py-8 max-w-7xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Summary & Insights</h1>
        <p className="text-lg text-gray-600">Here is the summarized text and key insights from your uploaded content.</p>
      </header>

      <section className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Summary</h2>
        <p className="text-gray-700">[Summarized text goes here]</p>
      </section>

      <section className="mt-8 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Key Insights</h2>
        <p className="text-gray-700">[Key insights go here]</p>
      </section>

      <section className="mt-8">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Download Summary</button>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 ml-4">Download Report</button>
        {/* Include visualizations if applicable */}
      </section>
    </main>
  );
};

export default Summary;