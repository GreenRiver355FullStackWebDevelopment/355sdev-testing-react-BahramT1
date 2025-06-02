function Restaurant({ restaurant }) {
  return (
    <div data-cy={`restaurant-${restaurant.name}`} className="restaurant">
      <h2>{restaurant.name}</h2>
      <ul>
        <li>{restaurant.address}</li>
        <li>{restaurant.phone}</li>
        <li>{restaurant.cuisine}</li>
        <li>{restaurant.rating}</li>
      </ul>
    </div>
  );
}

export default  Restaurant;
