import travelPlansData from "../assets/travel-plans.json";

const TravelList = () => {

    return (
      <ul>
        {travelPlansData.map(currentTravelPlan => (
        <li key={currentTravelPlan.id} 
        style={{
          display:'flex', 
          border:'1px solid black', 
          padding:'1rem',
          marginBottom:'1rem',
          gap:'1rem'}}
          >
          <div>
           
            <div>
              <img src={currentTravelPlan.image} style={{width:'150px'}}/>
            </div>

            <div>
              <h2> {currentTravelPlan.destination}({currentTravelPlan.days} Days)</h2>
              <p>{currentTravelPlan.description}</p>
              <p>Price: currentTravelPlan.totalCost </p>     
            </div>        
            
          </div>
        </li>))}
        

      
      
      
      </ul>
      );

}

export default TravelList;