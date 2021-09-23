import { useState, useCallback } from 'react';
import { appendItemToArray, removeItemFromArray } from '../../utils';

export const useFormArray = (initValue = ['']) => {
  const [fields, setFields] = useState(initValue);

  const handleChange = useCallback((e, i) => {
    setFields((prevState) => {
      const newState = [...prevState];
      newState[i] = e.target.value;
      return newState;
    });
  }, []);

  const addElement = useCallback((i) => {
    setFields((prevState) => appendItemToArray(prevState, i, ''));
  }, []);

  const removeElement = useCallback((i) => {
    setFields((prevState) => removeItemFromArray(prevState, i));
  }, []);

  return {
    fields,
    addElement,
    removeElement,
    handleChange,
  };
};
