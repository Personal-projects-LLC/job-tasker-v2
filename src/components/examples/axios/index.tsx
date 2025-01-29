import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface JokeData {
  id: string;
  setup: string;
  punchline: string;
}

interface ErrorType {
  message: string;
}

const fetchJoke = async (): Promise<JokeData[]> => {
  const { data } = await axios.get(
    'https://official-joke-api.appspot.com/jokes/programming/random'
  );
  return data;
};

export const AxiosExample: React.FC = () => {
  const [data, setData] = useState<JokeData[] | null>(null);
  const [error, setError] = useState<ErrorType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchJoke();
        setData(result);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError({ message: error.message });
        } else {
          setError({ message: 'An unknown error occurred' });
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || data.length === 0) {
    return <div>No jokes found</div>;
  }

  return (
    <div data-testid="joke-container">
      <p>Programmer Jokes {`#${data[0]?.id}`}</p>
      <p>{data[0]?.setup}</p>
      <p>{data[0]?.punchline}</p>
    </div>
  );
};
