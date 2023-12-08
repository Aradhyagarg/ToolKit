import React from 'react'

const Home = ({value}) => {

  return (
    <div>
        <h1>{value}</h1>
        <button>Increment</button>
        <button>Decrement</button>
    </div>
  )
}

export default Home