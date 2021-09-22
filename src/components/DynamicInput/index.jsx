import React from 'react'
import styles from './index.module.css'

export const DynamicInput = ({
  index,
  addElement,
  removeElement,
  handleChange,
  value,
  canRemove = false,
}) => {
  const add = () => addElement(index)
  const remove = () => removeElement(index)
  const onChange = (e) => handleChange(e, index)

  return (
    <div className={styles.InputContainer}>
      <input
        className={styles.Input}
        type="text"
        value={value}
        onChange={onChange}
      />
      <button className={styles.Button} onClick={add}>
        +
      </button>
      {canRemove && <button className={styles.Button} onClick={remove}>-</button>}
    </div>
  )
}
