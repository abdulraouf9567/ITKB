import { Link } from 'react-router-dom'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
function ListCard({paramId, title, description, updateTime }){
  return (
    <>
    <Link to={`/details/${paramId}`}>
    <div className="list-card">
            <h4>Title: {title}</h4>
            <h6>Description: {description}</h6>
            {/* <a href="">Read more</a> */}
            <Link to={`/details/${paramId}`}>Read More</Link>
            <p className="time-line mt-4">Updated: {formatDistanceToNow(new Date(updateTime),{ addSuffix: true })}</p>
        </div>
    </Link>
       
    </>
  )
}

export default ListCard