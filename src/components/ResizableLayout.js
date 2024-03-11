import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable';
import axios from 'axios';
import "./Resizable.css";

const ResizableLayout = () => {
  const [count, setCount] = useState({ add: 0, update: 0 });
  const resizeHandles = ['s', 'e', 'n', 'w', 'se', 'sw', 'ne', 'nw'];
  const addButtonClassNames = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded";
  const updateButtonClassNames = "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 m-2 border border-blue-500 hover:border-transparent rounded";

  const addData = () => {
    axios.post('/api/data/add')
      .then(() => setCount(prevCount => ({ ...prevCount, add: prevCount.add + 1 })))
      .then(() => console.log(count))
      .catch(error => console.error('Error adding data:', error));
  };

  const updateData = () => {
    axios.put('/api/data/update')
      .then(() => setCount(prevCount => ({ ...prevCount, update: prevCount.update + 1 })))
      .then(() => console.log(count))
      .catch(error => console.error('Error updating data:', error));
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <ResizableBox className="border border-gray-300 p-4 m-4" resizeHandles={resizeHandles} width={400} height={300}>
          <div>
            <h2>Resizable Component 1</h2>
            <button type="button" className={addButtonClassNames} onClick={addData}>Add</button>
            <button type="button" className={updateButtonClassNames} onClick={updateData}>Update</button>
          </div>
        </ResizableBox>
        <ResizableBox className="border border-gray-300 p-4 m-4" resizeHandles={resizeHandles} width={1170} height={300}>
          <div>
            <h2>Resizable Component 2</h2>
            <button type="button" className={addButtonClassNames} onClick={addData}>Add</button>
            <button type="button" className={updateButtonClassNames} onClick={updateData}>Update</button>
          </div>
        </ResizableBox>
      </div>
      <div className="flex flex-row">
        <ResizableBox className="border border-gray-300 p-4 m-4" resizeHandles={resizeHandles} width={1600} height={300}>
          <div>
            <h2>Resizable Component 3</h2>
            <button type="button" className={addButtonClassNames} onClick={addData}>Add</button>
            <button type="button" className={updateButtonClassNames} onClick={updateData}>Update</button>
          </div>
        </ResizableBox>
      </div>
    </div>
  );
};

export default ResizableLayout;