const PropertiesPanel = ({ selectedItem, updateItem }) => {
  if (!selectedItem) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateItem({ ...selectedItem, [name]: value });
  };

  return (
    <div>
      <h3>Properties</h3>
      <label>
        Width:
        <input type="number" name="width" value={selectedItem.width || ''} onChange={handleChange} />
      </label>
      <br />
      <label>
        Height:
        <input type="number" name="height" value={selectedItem.height || ''} onChange={handleChange} />
      </label>
      <br />
    </div>
  );
};

export default PropertiesPanel;
