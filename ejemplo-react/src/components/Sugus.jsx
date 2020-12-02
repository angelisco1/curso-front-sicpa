import React from 'react'

const Sugus = (props) => {
  console.log(props);

  const styles = {
    backgroundColor: props.sugus.color,
    width: '100px',
    height: '100px'
  }

  return (
    <div style={styles}>
      {props.sugus.sabor}
    </div>
  )
}

export default Sugus
