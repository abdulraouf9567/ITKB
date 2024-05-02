import { useParams } from "react-router-dom"
import { useState ,useEffect} from "react";
import DetailCard from "../components/detailCard";
import ClipLoader from 'react-spinners/ClipLoader';

function Details(){
  const [loadingInProgress, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const {id}=useParams()

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`https://itkb-backend.onrender.com/api/kbroutes/${id}`);
        const jsonData = await response.json();
      
        setData(jsonData);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    return;
  }, []); 


  return (
    <>
    <div className="container py-5">
        {loadingInProgress?(
          <div className="text-center loader-container">
          <ClipLoader color={'#fff'} size={150} />
        </div>
        ):(
          <DetailCard value={data} />
        )}
      
    
    </div>

    </>
  )
}

export default Details