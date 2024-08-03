import { useDrag } from 'react-dnd';

const DraggableItem = ({ type, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

export default DraggableItem;
