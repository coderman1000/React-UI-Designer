import { useDrop } from 'react-dnd';
import { useState, useEffect } from 'react';
import ResizableItem from './ResizableItem';

const GRID_SIZE = 20;

const snapToGrid = (x, y) => {
  const snappedX = Math.round(x / GRID_SIZE) * GRID_SIZE;
  const snappedY = Math.round(y / GRID_SIZE) * GRID_SIZE;
  return [snappedX, snappedY];
};

const DesignerSurface = ({ setSelectedItem }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const savedItems = localStorage.getItem('layout');
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('layout', JSON.stringify(items));
  }, [items]);

  const [, drop] = useDrop(() => ({
    accept: ['box', 'table', 'image', 'grid'],
    drop: (item, monitor) => {
      const offset = monitor.getClientOffset();
      const [snappedX, snappedY] = snapToGrid(offset.x, offset.y);
      setItems((prevItems) => [
        ...prevItems,
        { type: item.type, x: snappedX, y: snappedY },
      ]);
    },
  }));

  return (
    <div ref={drop} style={{ width: '100%', height: '100vh', position: 'relative', border: '1px solid black' }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{ position: 'absolute', left: item.x, top: item.y }}
          onClick={() => setSelectedItem(item)}
        >
          <ResizableItem>{item.type}</ResizableItem>
        </div>
      ))}
    </div>
  );
};

export default DesignerSurface;
