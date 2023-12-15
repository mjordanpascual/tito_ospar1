import './App.css'
import { useState, useEffect, useRef } from 'react'

function App() {

  const [isRfidNumber, setIsRfidNumber] = useState()

  const rfidInput = useRef()

  useEffect(() => {
    rfidInput.current.focus();
    // console.log(rfidInput);
  }, [])
  
  return (
    <>
      <div className='text-center'>
        {/* <h1 className='my-5'>Timekeeping Attendance</h1> */}
        <input type='text' className='my-5 text-center' ref={rfidInput} placeholder='RFID Badge Number' />
      </div>
    </>
  )
}

export default App
