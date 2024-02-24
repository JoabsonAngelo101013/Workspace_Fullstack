import React from 'react'
import axios from '../../api'

const SupplierList = () => {
    const [suppliers, setSuppliers] = useState([])

    useEffect(() => {
        axios.get('/suppliers')
        .then(response => {
            setSuppliers(response.data)
        })
        .catch(error => console.error("There was an error!", error))
    },[]);
  return (
    <div>
      
    </div>
  )
}

export default SupplierList
