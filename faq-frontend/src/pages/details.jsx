import { useParams } from "react-router-dom"
import { useState ,useEffect} from "react";
import DetailCard from "../components/detailCard";

function Details(){
  const [data, setData] = useState([]);
  const {id}=useParams()

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch(`https://itkb-backend.onrender.com/api/kbroutes/${id}`);
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
    <div className="container py-5">
    <DetailCard value={data} />
    </div>

    </>
  )
}

export default Details