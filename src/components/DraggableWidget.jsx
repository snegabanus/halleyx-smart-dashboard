import { useDrag } from "react-dnd";

function DraggableWidget({ type }) {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "WIDGET",
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: "10px",
        margin: "10px",
        background: "#1e293b",
        color: "white",
        cursor: "grab",
        opacity: isDragging ? 0.5 : 1
      }}
    >
      {type}
    </div>
  );
}

export default DraggableWidget;