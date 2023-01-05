import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import './Game.css'

export const Game = () => {
    const [selectedCells, setSelectedCells] = useState(new Map());
    const [playerOne, setPlayerOne] = useState(true)

    const checkCellValue = (indexRow, indexCol) => {
        const rowCell = ""+indexRow+indexCol;
        if(selectedCells.has(rowCell)){
            const infos = selectedCells.get(rowCell)
            return infos ? 'X' : 'O';
        }
    }

    const onClickCell = (indexRow, indexCol) => {
        const rowCell = ""+indexRow+indexCol;
        if (selectedCells.has(rowCell)) {
            return
        }
        setSelectedCells(selectedCells.set(rowCell,playerOne))
        console.log(selectedCells.get(indexRow - 1 + "" + indexCol))

        let winCounter = 1;

        if (selectedCells.get(indexRow - 1 + "" + indexCol) == playerOne) {
            winCounter++;
            if (selectedCells.get(indexRow - 2 + "" + indexCol) == playerOne) {
                winCounter++;
                alert(playerOne ? "X nyert" : "O nyert")
            }
        }

        setPlayerOne(!playerOne);
        console.log(selectedCells)
    }

    return (
    <>
        {
            Array.from({length: 3}, (_, indexRow) => {
                return <Row key={indexRow}>
                    {
                    Array.from({length: 3}, (_, indexCol) => {
                        return <Col 
                            key={indexCol} 
                            className='divBorder' 
                            onClick={(e) => onClickCell(indexRow, indexCol)}
                            >
                                <h1>{checkCellValue(indexRow, indexCol)}</h1>
                            </Col>
                    })
                }
                </Row>     
            })
        }
    </>
  )
}
