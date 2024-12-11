import travelPlansData from "../assets/travel-plans.json";

function TravelList (){

    return (
        <ul>
          {travelPlansData.map((plan) => (
            <li key={plan.id}>
              <h3>{plan.destination}</h3>
              <p>{plan.description}</p>
            </li>
          ))}
        </ul>
      );

}

export default TravelList;