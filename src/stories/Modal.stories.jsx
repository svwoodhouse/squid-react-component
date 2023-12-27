import React from 'react'
import Modal from '../components/Modal/Modal'
import Button from '../components/Button/Button'

import { useState } from "react";

export default {
    title: 'Modal',
    component: Modal
}

export const modal = () => {
    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div><Button primary onClick={handleClose}>I Accept</Button></div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>Here is an important agreement for you to accept</p>
    </Modal>

      return (
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
        </div>
      )
}