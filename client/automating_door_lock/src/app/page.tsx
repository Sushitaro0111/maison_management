"use client";

import { useState } from 'react';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function Home() {
  const [data, setData] = useState<Post | null>(null);

  const handleClick = async () => {
    try {
      const response = await axios.get<Post>('http://localhost:8000/door_lock/devices/');
      console.log(response);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Root Dir</h1>
      <h1>Next.js with Axios and TypeScript</h1>
      <button onClick={handleClick}>Fetch Data</button>
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}