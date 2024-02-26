{/*Extract a component
1st way*/}
import { getImageUrl } from './utils.js';

function Profile({
  imageSize=70,
  imageId,
  name,
  profession,
  awards,
  discovery
}) {
  return (
      <section className="profile">
        <h2>{name}</h2>
        <img 
          className="avatar"
          src={getImageUrl(imageId)}
          alt={name}
          width={imageSize}
          height={imageSize}
        />
        <ul>
          <li><b>Profession: </b>{profession}</li>
          <li>
            <b>Awards: {awards.length} </b>
            ({awards.join(', ')})
          </li>
          <li>
            <b>Discovered: </b>
            {discovery}
          </li>
        </ul>
      </section>
  )
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile 
        name="Maria Skłodowska-Curie"
        imageId="'szV5sdG'"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile 
        name="Katsuko Saruhashi"
        imageId="YfeOqp2"
        profession="geochemist"
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
  );
}
