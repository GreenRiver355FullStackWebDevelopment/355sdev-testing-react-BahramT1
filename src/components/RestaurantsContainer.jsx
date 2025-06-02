import Restaurant from "./Restaurant";

//Containers are for behind the scenes logic
function RestaurantsContainer(props) {
  console.log(props);
  return (
    <div className="restaurantContainer">
     {props.restaurants.map((r) => (
     <Restaurant key={r.name} restaurant={r} />
    ))}

    </div>
  );
}

export default RestaurantsContainer;
