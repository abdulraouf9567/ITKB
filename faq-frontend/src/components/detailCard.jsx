

function DetailCard(value) {
  const {title,small_description,detailed_description,createdAt}=value.value;
  const createdDate=new Date(createdAt)
 
  const formattedDate = createdDate.toString().split(' ').slice(0, 4).join(' ');

  return (
    <>
      <div className="container detail-card-container">
        <h2>{title}</h2>
        <h4 className="mt-4">{small_description}</h4>
        <h4 className="mt-4">{detailed_description}</h4>
       <p className="time-line mt-4">Last Updated: {formattedDate}</p>
      </div>
    </>
  );
}

export default DetailCard;
