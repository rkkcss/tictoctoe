import React, { useState } from 'react'
import { Col, Modal, Row } from 'react-bootstrap';
import { WinnerModal } from '../components/modals/WinnerModal';
import './Game.css'

export const Game = () => {
    const [selectedCells, setSelectedCells] = useState(new Map());
    const [playerOne, setPlayerOne] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const checkCellValue = (indexRow, indexCol) => {
        const rowCell = ""+indexRow+indexCol;
        if(selectedCells.has(rowCell)){
            const infos = selectedCells.get(rowCell)
            return infos ? 'X' : 'O';
        }
    }

    const onClickCell = (indexRow, indexCol) => {
        const rowCell = "" + indexRow + indexCol;
        if (selectedCells.has(rowCell)) {
            return
        }
        setSelectedCells(selectedCells.set(rowCell,playerOne))

        if (selectedCells.get(indexRow - 1 + "" + indexCol) == playerOne &&
            selectedCells.get(indexRow + 1 + "" + indexCol) == playerOne) {
            //check one up and one down
            setIsModalOpen(true)
            return
            
        } else if (selectedCells.get(indexRow + "" + parseInt(indexCol - 1)) == playerOne &&
                   selectedCells.get(indexRow + "" + parseInt(indexCol - 2)) == playerOne) {
            //check one up and one down
            setIsModalOpen(true)
            return
        
        } else if (selectedCells.get(indexRow + "" + parseInt(indexCol + 1)) == playerOne &&
                   selectedCells.get(indexRow + "" + parseInt(indexCol + 2)) == playerOne) {
            //check one up and one down
            setIsModalOpen(true)
            return

        } else if (selectedCells.get(indexRow - 1 + "" + indexCol) == playerOne && 
                   selectedCells.get(indexRow - 2 + "" + indexCol) == playerOne){
            //checking 2 cells upper
            setIsModalOpen(true)
            return
        } else if (selectedCells.get(indexRow + 1 + "" + indexCol) == playerOne && 
                   selectedCells.get(indexRow + 2 + "" + indexCol) == playerOne){
            //checking 2 cells down
            setIsModalOpen(true)
            return
        } else if (selectedCells.get(indexRow - 1 + "" + parseInt(indexCol - 1)) == playerOne &&
                   selectedCells.get(indexRow + 1 + "" + parseInt(indexCol + 1)) == playerOne) {
            setIsModalOpen(true)
            return
        }else if (selectedCells.get(indexRow + 1 + "" + parseInt(indexCol - 1)) == playerOne &&
                  selectedCells.get(indexRow + 2 + "" + parseInt(indexCol - 2)) == playerOne) {
            setIsModalOpen(true)
            return
        }else if (selectedCells.get(indexRow - 1 + "" + parseInt(indexCol + 1)) == playerOne &&
                  selectedCells.get(indexRow - 2 + "" + parseInt(indexCol + 2)) == playerOne) {
            setIsModalOpen(true)
            return
        }else if (selectedCells.get(indexRow - 1 + "" + parseInt(indexCol - 1)) == playerOne &&
                  selectedCells.get(indexRow - 2 + "" + parseInt(indexCol - 2)) == playerOne) {
            setIsModalOpen(true)
            return
        }else if (selectedCells.get(indexRow + 1 + "" + parseInt(indexCol + 1)) == playerOne &&
                  selectedCells.get(indexRow + 2 + "" + parseInt(indexCol + 2)) == playerOne) {
            setIsModalOpen(true)
            return
        }        
        setPlayerOne(!playerOne);
    }

    return (
    <>
        <WinnerModal show={isModalOpen} onHide={() => setIsModalOpen(false)} winner={playerOne} />
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
