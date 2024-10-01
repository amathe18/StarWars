import { useState, useEffect } from 'react'
import './App.css'
import './services/sw-api'


function App() {

  const [data, setData] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const result =await fetch(URL)

    }}
  )}

 

export default App
