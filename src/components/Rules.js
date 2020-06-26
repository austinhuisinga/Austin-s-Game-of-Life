import React from 'react'

export default function Rules() {
  return(
    <div className='rules'>
      <h2>Game of Life Rules</h2>
      <p>In the Game of Life, these rules examine each cell of the grid. For each cell, it counts that cell's eight neighbors (up, down, left, right, and diagonals), and then act on that result.</p>
      <p>If the cell is alive and has 2 or 3 neighbors, then it remains alive. Else it dies.</p>
      <p>If the cell is dead and has exactly 3 neighbors, then it comes to life. Else if remains dead.</p>

    </div>
  )
}