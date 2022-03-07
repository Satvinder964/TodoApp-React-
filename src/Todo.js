import React, { useState } from 'react'

export default function Todo() {
  const [inputData, setInputData] = useState('')
  const [items, setItems] = useState([])
  console.log(items, 'items')
  const addItem = () => {
    if (!inputData) {
      alert('Required Filed')
    } else {
      setItems([...items, inputData]);
      setInputData('')
    }

  }
  const deleteItems = (id) => {
    const updateItem = items.filter((elem, ind) => {
      return ind !== id;
    })
    setItems(updateItem)
  }
  const removeAll = () => {
    setItems([])
  }
  return (
    <div>
      <input type='text' placeholder="add Item.." onChange={(e) => setInputData(e.target.value)} value={inputData} />
      <button onClick={addItem}>Add</button>
      <>
        {
          items.map((elm, ind) => {
            return (
              <>
                <h4 onClick={() => removeAll(ind)}>All Remove</h4>
                <h5>{elm}</h5>
                <p onClick={() => deleteItems(ind)}>Delete</p>
              </>
            )
          })
        }
      </>
    </div>
  )
}
