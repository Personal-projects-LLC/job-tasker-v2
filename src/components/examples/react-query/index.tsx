import React, { useState, useEffect } from 'react';

const API_URL = 'https://official-joke-api.appspot.com/jokes/programming/random';

interface Joke {
  id: number;
  type: string;
  setup: string;
  punchline: string;
}

const [data, setData] = useState<Joke[]>([]);

export const ReactQueryExample: React.FC = () => {
  const [data, setData] = useState<Joke[]>([]); // Указан тип для состояния data
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleClick = () => {
    setIsLoading(true);
    setError(null);
    setData([]);
    // Вызов fetchData для обновления данных при нажатии кнопки
    // fetchData();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>No jokes found</div>;
  }

  const jokeData = data[0];

  return (
    <div>
      <header>
        <h2>React Query Data Fetching Example</h2>
      </header>
      <main>
        <p>Programmer Jokes {`#${jokeData.id}`}</p>
        <p>{jokeData.setup}</p>
        <p>{jokeData.punchline}</p>
        <p>
          <button onClick={handleClick}>Give me another</button>
        </p>
      </main>
      <footer>
        <a
          href="https://react-query.tanstack.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go To Documentation
        </a>
      </footer>
    </div>
  );
};
