import React from 'react';

type GreatPros = {
  name?: string
}

const Great = (props: GreatPros) => {
  return (
    <div>Hello {props.name}</div>
  )
}

export default Great