import React from 'react'
import people from './people.jpeg'

function Home() {
  return (
    <div className='container'>
        <h1>Your place for meeting new awesome people!</h1>
        <img src={people}></img>
    </div>
  )
}

export default Home