type props = {
    data: string;
};

function List({data}: props) {
  return (
    <ul className="list-group">
        {data.map((elemento) => {
            <li className="list-group-itam ">{elemento}</li>

        })}
        
    </ul>
  );
}

export default List;