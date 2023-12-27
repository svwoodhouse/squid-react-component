import React, { useState } from 'react'
import Dropdown from '../components/Dropdown/Dropdown'

export default {
    title: 'Dropdown',
    component: Dropdown
}

export const dropdown = () => {
    const options = [
        { label: 'Red', value: 'red'},
        { label: 'Green', value: 'green'},
        { label: 'Blue', value: 'blue'}
      ]
      const [selection, setSelection] = useState(null);
    
      const handleSelect = (option) => {
        setSelection(option)
      }

      return (
        <Dropdown options={options} onChange={handleSelect} value={selection}/>
      )
}