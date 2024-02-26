function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name + (isPacked?'✔':'❌')}
      {/* {isPacked? name+'✔' : name+'❌'} */}
      {/* {name} {isPacked ? '✔' : '❌'}  //This one is the most preferred way*/}
    </li>
  );
}

export default function PackingList() {
  return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
  );
}
