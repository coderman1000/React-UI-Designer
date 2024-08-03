import { useState } from 'react';
import dynamic from 'next/dynamic';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

const Toolbox = dynamic(() => import('../components/Toolbox'), { ssr: false });
const DesignerSurface = dynamic(() => import('../components/DesignerSurface'), { ssr: false });
const PropertiesPanel = dynamic(() => import('../components/PropertiesPanel'), { ssr: false });

export default function Home() {
  const [selectedItem, setSelectedItem] = useState(null);

  const updateItem = (updatedItem) => {
    setSelectedItem(updatedItem);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex' }}>
        <Toolbox />
        <DesignerSurface setSelectedItem={setSelectedItem} />
        <PropertiesPanel selectedItem={selectedItem} updateItem={updateItem} />
      </div>
    </DndProvider>
  );
}
