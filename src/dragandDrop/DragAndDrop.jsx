import React, { useRef, useState } from "react";

const DragAndDrop = () => {


    const initialData = {
        Todo: [
          "Design UI mockups",
          "Set up project repository",
          "Write unit test",
          "Integrate payment gateway",
        ],
        "In Progress": ["Develop authentication flow", "Implement responsive design"],
        Completed: [
          "Set up CI/CD pipeline",
          "Conduct code reviews",
          "Deploy initial version to staging",
        ],
      };


  const [data, setData] = useState(initialData);
  const dragItem = useRef();
  const dragContainer = useRef();

  console.log({dragItem});
  console.log({dragContainer});

  const handleDragStart = (e, item, container) => {
    console.log({ e, item, container });
    dragItem.current = item;
    dragContainer.current = container;
    e.target.style.opacity = "0.5";
  };

  const handleDragEnd = (e) => {
    e.target.style.opacity = "1";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetContainer) => {
    const item = dragItem.current;
    const sourceContainer = dragContainer.current;
    setData((prev) => {
      const newData = { ...prev };
      newData[sourceContainer] = newData[sourceContainer].filter(
        (i) => i !== item
      );
      newData[targetContainer] = [...newData[targetContainer], item];
      return newData;
    });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {Object.keys(data).map((container, index) => {
        return (
          <div
            key={index}
            onDrop={(e) => handleDrop(e, container)}
            onDragOver={handleDragOver}
            style={{
              background: "#f0f0f0",
              padding: "1rem",
              width: 250,
              minHeight: 300,
            }}
          >
            <h2>{container}</h2>
            {data[container].map((item, idx) => {
              return (
                <div
                  key={idx}
                  onDragStart={(e) => handleDragStart(e, item, container)}
                  onDragEnd={handleDragEnd}
                  draggable
                  style={{
                    userSelect: "none",
                    padding: 16,
                    margin: "0 0 8px 0",
                    backgroundColor: "white",
                    cursor: "move",
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DragAndDrop;


