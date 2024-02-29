{/*This is the other way I wrote it:*/}
function Item({ name, importance }) {
  let show = importance > 0 && '(importance: ' + importance + ')'
  return (
    <li className="item">
      {name} <i>{show}</i>
    </li>
    /* react.dev's way
    <li className="item">
      {name}
      {importance > 0 && ' '}
      {importance > 0 &&
        <i>(Importance: {importance})</i>  
      }

      //Note that in react.dev's answer... the ' ' is necessary because if you put the {importance && ...} in the next line, no spaces will be inserted unlike my answer above. Hence if you put it this way:
      {name}
      {importance>0 && "(Importance: " + importance + ")" }
      it will look this way: SpaceSuit(Importance: 9) //without spaces
      );
      */
  )
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          importance={9} 
          name="Space suit" 
        />
        <Item 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}