import { useState } from 'react';
import axios from 'axios';

function IdeaForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const idea = { title, description, author };

    try {
      const response = await axios.post('/api/ideas', idea);
      setMessage('Idea submitted successfully!');
      setTitle('');
      setDescription('');
      setAuthor('');
      console.log("helloo: ",response)
    } catch (error) {
      setMessage('Failed to submit the idea. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Submit a New Idea</h1>
      {message && <p className="text-green-600 mb-4">{message}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            className="w-full border p-2 rounded-md"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            className="w-full border p-2 rounded-md"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-sm font-medium">Your Name</label>
          <input
            type="text"
            id="author"
            className="w-full border p-2 rounded-md"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Submit Idea
        </button>
      </form>
    </div>
  );
}

export default IdeaForm;
