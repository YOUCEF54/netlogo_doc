import { useEffect, useState } from 'react';
import axios from 'axios';

function Menu() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const res = await axios.get('/api/ideas');
        if (Array.isArray(res.data)) {
          setIdeas(res.data); // Set only if res.data is an array
        } else {
          console.error("API response is not an array:", res.data);
        }
      } catch (error) {
        console.error("Error fetching ideas:", error);
      }
    };
    fetchIdeas();
  }, []);

  return (
    <div>
      <h1>Ideas</h1>
      {Array.isArray(ideas) && ideas.length > 0 ? (
        ideas.map((idea) => (
          <div key={idea?._id}>
            <h2>{idea?.title}</h2>
            <p>{idea?.description}</p>
          </div>
        ))
      ) : (
        <p>No ideas found or unable to fetch data.</p>
      )}
    </div>
  );
}

export default Menu;
