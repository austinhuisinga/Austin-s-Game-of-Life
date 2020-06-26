import React from 'react'

export default function Controls({
  setClickable,
  clickable,
  speed,
  setSpeed,
}) {

  return(
    <div className='controls'>
      <input
        placeholder='Speed(ms)'
        value={speed}
        onChange={e => setSpeed(e.target.value)}
      />
      <button
        onClick={() => setClickable(prevState => !prevState)}
      >
        {clickable ? 'Start' : 'Stop'}
      </button>
    </div>
  )
}