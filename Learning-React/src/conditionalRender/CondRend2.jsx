function Item({ name, importance }) {
  return (
    <li className="item">
      {/*the space you see between {name} and {cond rend} counts as space here because it is inside the li tag */}
      {name} {importance>0 && "(Importance: " + importance + ")" }
      {/*my fixed(italicized) answer:
      {name} {importance>0 && <i>(Importance: {importance})</i>}
      react.dev's answer:
      {name}
      {importance > 0 && ' '}
      {importance > 0 &&
        <i>(Importance: {importance})</i>
      }
      //Note that in react.dev's answer... the ' ' is necessary because if you put the {importance && ...} in the next line, no spaces will be inserted unlike my answer above. Hence if you put it this way:
      {name}
      {importance>0 && "(Importance: " + importance + ")" }
      it will look this way: SpaceSuit(Importance: 9) //without spaces
      */}
    </li>
  );
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
  )
}