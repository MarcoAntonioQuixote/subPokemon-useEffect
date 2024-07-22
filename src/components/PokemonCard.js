import React from 'react'

function PokemonCard({poke}) {
  return (
    <div className={`card ${poke.type}`}>
        <h2>{poke.name}</h2>
        <div>{poke.type}</div>
        <img src={poke.image} alt="" />
    </div>
  )
}

export default PokemonCard