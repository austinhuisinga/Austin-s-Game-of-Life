import React from 'react'

export default React.memo(
    function DefaultGrid({
        createRandomGrid,
        setGridSize,
        clickable
    }) {
        return(
            <div className='default_grid'>
                <button
                    onClick={
                        clickable
                        ? () => {
                            setGridSize(15);
                            createRandomGrid(15);
                            }
                        : null
                    }
                >
                    Create 15x15 Grid
                </button>
            
                <button
                onClick={
                    clickable
                    ? () => {
                        setGridSize(30);
                        createRandomGrid(30);
                        }
                    : null
                }
                >
                    Create 30x30 Grid
                </button>

            </div>
        )
    },
)

