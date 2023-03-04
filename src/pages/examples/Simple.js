import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import img1 from '../../assets/richard.jpg'
import img3 from '../../assets/monica.jpg'
import img4 from '../../assets/jared.jpg'
import img5 from '../../assets/dinesh.jpg'


const db = [
  {
    name: 'Richard Hendricks',
    url: img1
  },
  {
    name: 'Monica Hall',
    url: img3
  },
  {
    name: 'Jared Dunn',
    url: img4
  },
  {
    name: 'Dinesh Chugtai',
    url: img5
  }
]

function Simple () {
  const characters = db
  const [lastDirection, setLastDirection] = useState()

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete)
    setLastDirection(direction)
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
  }

  return (
    <div>
      <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
      <h1>React Tinder Card</h1>
      <div className='cardContainer'>
        {characters.map((character) =>
          <TinderCard className='swipe' key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
            <div className='card'><img style={{width: '400px', height: '400px'}} src={character.url}></img>
              <h3>{character.name}</h3>
            </div>
          </TinderCard>
        )}
      </div>
      {lastDirection ? <h2 className='infoText'>You swiped {lastDirection}</h2> : <h2 className='infoText' />}
    </div>
  )
}

export default Simple
