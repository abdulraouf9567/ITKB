import { useState, useEffect } from 'react';
import ListCard from '../components/listcard';
function ListKb(){

  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('https://itkb-backend.onrender.com/api/kbroutes');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    return;
  }, []); 


  return (
    <>
      <div className="container mt-5 d-flex d-flex flex-column">
        {data.map(item=>(
          <ListCard key={item._id} paramId={item._id} title={item.title} description={item.small_description} updateTime={item.createdAt} />
        ))}
      </div>
    </>
  )
}

export default ListKb