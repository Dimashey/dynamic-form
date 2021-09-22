import React, { useCallback, useState } from 'react'
import './App.css'
import { append, remove } from './utils'
import { DynamicInput } from './components/DynamicInput'

function App() {
  const [fields, setFields] = useState([''])

  const handleChange = useCallback((e, i) => {
    setFields((prevState) => {
      const newState = [...prevState]
      newState[i] = e.target.value
      return newState
    })
  }, [])

  const addElement = useCallback((i) => {
    setFields((prevState) => append(prevState, i, ''))
  }, [])

  const removeElement = useCallback((i) => {
    setFields((prevState) => remove(prevState, i))
  }, [])

  return (
    <div className="App">
      {fields.map((v, i) => (
        <DynamicInput
          value={v}
          addElement={addElement}
          removeElement={removeElement}
          handleChange={handleChange}
          index={i}
          canRemove={i !== 0}
        />
      ))}
    </div>
  )
}

export default App
