const Upload: React.FC = () => {
    return (
      <main className="px-4 py-8 max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Upload Your Content</h1>
          <p className="text-lg text-gray-600">Upload your text files for summarization and analysis.</p>
        </header>
  
        <section>
          <form className="bg-white p-6 shadow-md rounded-lg">
            <div className="mb-4">
              <label htmlFor="file-upload" className="block text-lg font-medium mb-2">Choose File</label>
              <input
                type="file"
                id="file-upload"
                accept=".txt,.pdf,.docx"
                className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-lg font-medium mb-2">File Description</label>
              <textarea
                id="description"
                rows={4}
                className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md"
                placeholder="Describe the content of the file..."
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Upload</button>
          </form>
        </section>
  
        <section className="mt-8">
          <p className="text-gray-600">Supported formats: .txt, .pdf, .docx. Ensure the file is not too large and properly formatted.</p>
        </section>
      </main>
    );
  };
  
  export default Upload;