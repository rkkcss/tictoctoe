import React from 'react'
import { Modal } from 'react-bootstrap'

export const WinnerModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.onHide}>
        <Modal.Body>
            <h1>Te nyertél {props.winner ? "X" : "O"}!</h1>
            <p>Szeretnél újra játszani?</p>
        </Modal.Body>
        <Modal.Footer>
            
        </Modal.Footer>
    </Modal>
  )
}
