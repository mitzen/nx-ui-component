
'use client'
import { addItem } from "./addItem"

// Server Action being called inside a Client Component
export default async function AddToCart() {

    const handle = async () => { 
    addItem();
  }

  return (
    <button onClick={handle}>Add Me</button>   
  )
}
