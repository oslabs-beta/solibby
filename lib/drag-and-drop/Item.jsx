export default (props) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('id', props.itemID);
  };

  return (
    <div
      class='border border-black m-3 p-3 cursor-move'
      draggable={true}
      onDragStart={(e) => handleDragStart(e)}
    >
      {props.items.filter((i) => i.itemID == props.itemID)[0].title}{' '}
      {props.itemID}
    </div>
  );
};
