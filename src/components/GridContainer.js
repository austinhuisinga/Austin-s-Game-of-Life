import React, { useState, useEffect } from 'react'
import Grid from './Grid'
import Controls from './Controls'
import DefaultGrid from './DefaultGrid'
import { useGrid, useInterval } from '../custom-hooks/hooks'

export default function GridContainer () {
    const [
        grid,
        setGrid,
        generation,
        setGeneration,
        clickable,
        setClickable,
        speed,
        setSpeed,
        stepThroughAutomata,
        toggleLife,
        setDefaultGrid,
        createRandomGrid,
        gridSize,
        setGridSize,
    ] = useGrid();

    useInterval(stepThroughAutomata, +speed || 500, grid, clickable);

    return (
        <div className='grid_container'>
            <h1>Generation: {generation}</h1>
            <div className='grid_and_default_buttons'>
                <Grid
                    grid={grid}
                    setGrid={setGrid}
                    toggleLife={toggleLife}
                    clickable={clickable}
                    stepThroughAutomata={stepThroughAutomata}
                    gridSize={gridSize}
                />
                <DefaultGrid
                    gridSize={gridSize}
                    setGridSize={setGridSize}
                    createRandomGrid={createRandomGrid}
                    setDefaultGrid={setDefaultGrid}
                    clickable={clickable}
                />
            </div>
            <Controls
                stepThroughAutomata={stepThroughAutomata}
                setClickable={setClickable}
                clickable={clickable}
                speed={speed}
                setSpeed={setSpeed}
            />
        </div>
    )
}
