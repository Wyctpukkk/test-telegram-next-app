'use client';
import { useEffect } from 'react';

const tg = global.Telegram?.WebApp;

export default function Home() {
  const onCLose = () => {
    tg?.close();
  };

  useEffect(() => {
    tg?.ready();
  }, []);

  return (
    <div>
      NEXT JS APP
      <div>Username = {tg?.initDataUnsafe?.user?.username}</div>
      <button onClick={onCLose}>Close</button>
    </div>
  );
}
