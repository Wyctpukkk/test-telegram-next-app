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
      <button onClick={onCLose}>Close</button>
    </div>
  );
}
