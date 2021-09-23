import React from 'react';
import './App.css';
import { DynamicInput } from './components/DynamicInput';
import { useFormArray } from './hooks/useFormArray';

const FIRST_INDEX = 0;

function App() {
  const { fields, handleChange, removeElement, addElement } = useFormArray();

  return (
    <div className="App">
      {fields.map((value, index) => {
        return (
          <DynamicInput
            key={index}
            value={value}
            addElement={addElement}
            removeElement={removeElement}
            handleChange={handleChange}
            index={index}
            canRemove={index !== FIRST_INDEX}
          />
        );
      })}
    </div>
  );
}

export default App;
