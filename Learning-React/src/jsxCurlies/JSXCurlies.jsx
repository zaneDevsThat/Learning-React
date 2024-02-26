//in jsx, we can pass in {variable} or {{<object>}} or {{<css properties>}}
import myImage from "../assets/pogi-papa.jpg"

 //variable
 const avatar = "Cutie Pie";
 //object
 const person = {
   name: "Zane",
   age: 33,
   kids: [
     "Pab", 
     "Kab"
   ],
 }
 //for built-in methods
 const today = new Date();

export function SingleCurly() {
  return (
    <>
      <h1>Hi {avatar}!</h1>
      {/*double curls for inline-styling. css properties are treated as object properties AND html attributes as objects*/}
      <p style={{
        fontFamily: 'Arial',
        color: 'teal',
        backgroundColor: 'whitesmoke',
      }}>Is {person.age} your current age {person.name}?</p>
      <p>The day today is <strong><em>{DisplayDate(today)}</em></strong></p>
      <img
        src={myImage}
        alt="Zane Hipolito"
      />
    </>
  )
}

export function DisplayDate(date) {

  return (
      new Intl.DateTimeFormat(
      'en-US',
      { weekday: 'long' })
      .format(date)
  )
}