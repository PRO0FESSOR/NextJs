// app/dashboard/page.js
'use client'

import { useState } from 'react';

export default function Dashboard() {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    // Intentionally throw an error
    throw new Error('Simulated error');
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button className="bg-white text-blue-500" onClick={() => setShouldThrow(true)}>Throw Error</button>
    </div>
  );
}
