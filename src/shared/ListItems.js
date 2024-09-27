// https://dev.to/collegewap/how-to-delete-an-item-from-the-state-array-in-react-kl
import { useState } from "react";
import '../styles/custom.css';

function ListOfFruits() {
  const [fruits, setFruits] = useState([
    "🍎 Apple",
    "🍊 Orange",
    "🍌 Banana",
    "🍇 Grapes",
  ])

  const deleteByValue = value => {
    setFruits(oldValues => {
      return oldValues.filter(fruit => fruit !== value)
    })
  }

  const deleteByIndex = index => {
    setFruits(oldValues => {
      return oldValues.filter((_, i) => i !== index)
    })
  }

  return (
    <div className="row">
      <h1>Delete Items From List</h1>
      <h2>Using deleteByValue</h2>  
      <ul>
        {fruits.map(fruit => {
          return (
            <li key={fruit}>
              <span>{fruit}</span>
              <button className="btn btn-primary" onClick={() => deleteByValue(fruit)}>Delete</button>
            </li>
          )
        })}
      </ul>
      <h2>Using deleteByIndex</h2>
      <ul>
        {fruits.map((fruit, index) => {
          return (
            <li key={fruit}>
              <span>{fruit}</span>
              <button className="btn btn-primary" onClick={() => deleteByIndex(index)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ListOfFruits;