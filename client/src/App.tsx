import { useEffect, useState } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('Loading...');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/hello`);
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        console.error('Error fetching message from backend:', error);
        setMessage('Failed to fetch message.');
      }
    };

    fetchMessage();
  }, []);

  return (
    <main className="flex items-center justify-center h-screen bg-gray-100 text-2xl font-semibold">
      <p>{message}</p>
    </main>
  );
};

export default App;
