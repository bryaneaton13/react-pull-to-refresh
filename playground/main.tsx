import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import ReactPullToRefresh from '../src';

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function Play() {
  const [items, setItems] = useState([1, 2, 3, 4]);
  async function handleRefresh() {
    console.log('calling refresh');
    await delay(250);
    setItems((items) => [...items, items[items.length - 1] + 1]);
  }
  return (
    <ReactPullToRefresh onRefresh={handleRefresh} style={{ textAlign: 'center' }}>
      <h3>Pull down to refresh</h3>
      <div>
        {items.map((i) => (
          <div key={`item_${i}`}>Item {i}</div>
        ))}
      </div>
    </ReactPullToRefresh>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Play />
  </StrictMode>,
);
