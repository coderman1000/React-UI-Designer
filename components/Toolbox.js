import DraggableItem from './DraggableItem';

const Toolbox = () => {
  return (
    <div>
      <h3>Toolbox</h3>
      <DraggableItem type="box">Box</DraggableItem>
      <DraggableItem type="table">Table</DraggableItem>
      <DraggableItem type="image">Image</DraggableItem>
      <DraggableItem type="grid">Grid</DraggableItem>
    </div>
  );
};

export default Toolbox;
