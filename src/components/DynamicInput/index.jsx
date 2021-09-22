import React from 'react'

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
    <div>
      <input type="text" value={value} onChange={onChange} />
      <button onClick={add}>+</button>
      {canRemove && <button onClick={remove}>-</button>}
    </div>
  )
}
