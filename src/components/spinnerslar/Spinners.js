import './Spinners.css'
import { RotateSpinner } from 'react-spinners-kit';
import { useEffect, useState } from 'react';
import Home from '../HomePage/Home';



function Spinners() {
  let [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  }, [])

  return (

    <div>
      {loading ?
        <div className='sweet-loading'>
          <RotateSpinner color="#fff" size={150} />
        </div>
        :
        <Home />
      }
    </div>
  )
}

export default Spinners;