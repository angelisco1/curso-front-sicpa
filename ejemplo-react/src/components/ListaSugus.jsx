import React, { useState } from 'react'
import Sugus from './Sugus';

const ListaSugus = () => {
  const [listaSugus, setListaSugus] = useState([
    { id: 1, color: 'yellow', sabor: 'limón' },
    { id: 2, color: 'orange', sabor: 'naranja' },
    { id: 3, color: 'blue', sabor: 'piña' },
    { id: 4, color: 'red', sabor: 'fresa' }
  ])

  const componentesSugus = listaSugus.map((s) => {
    return <Sugus sugus={s} key={s.id} />
  })
  // const componentesSugus = listaSugus.map((s, index) => {
  //   return <Sugus sugus={s} key={index} />
  // })

  console.log(componentesSugus)

  return (
    <div>
      {componentesSugus}
    </div>
  )
}

export default ListaSugus
