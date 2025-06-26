import { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('https://your-backend-url.onrender.com/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error('Error:', err));
  }, []);

  return (
    <div className="p-4 text-xl">
      Backend says: {message}
    </div>
  );
}

export default App;
