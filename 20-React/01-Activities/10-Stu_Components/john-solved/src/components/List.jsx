function List(props) {
  console.log(props);
  const filteredItems = props.groceries.filter((item) => item.purchased);
  return (
    <ul className="list-group">
      {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
      {filteredItems.map((item) => {
        return (
          // TODO: Your code here
          <li className="list-group-item" key={item.id}>{`${item.name}`}</li>
        );
      })}
    </ul>
  );
}

export default List;
