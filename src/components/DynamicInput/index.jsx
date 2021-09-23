import React, { memo } from 'react';
import styles from './index.module.css';

export const DynamicInput = memo(
  ({
    index,
    addElement,
    removeElement,
    handleChange,
    value,
    canRemove = false,
  }) => {
    const addItem = () => addElement(index);
    const removeItem = () => removeElement(index);
    const onChange = (e) => handleChange(e, index);

    return (
      <div className={styles.InputContainer}>
        <input
          className={styles.Input}
          type="text"
          value={value}
          onChange={onChange}
        />
        <button className={styles.Button} onClick={addItem}>
          +
        </button>
        {canRemove && (
          <button className={styles.Button} onClick={removeItem}>
            -
          </button>
        )}
      </div>
    );
  }
);
