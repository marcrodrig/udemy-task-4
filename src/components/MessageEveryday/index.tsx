import React, { useState } from 'react'
import Button from '../Button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from '../Modal';
import { MESSAGE_EVERYDAY } from './constant'

const MessageEveryday = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)
  const { dayName, message } = MESSAGE_EVERYDAY[new Date().getDay()];
  return (
    <>
      <h1>Message Everyday</h1>
      <Button onClick={handleShowModal}>Get Your Message</Button>
      <Modal show={showModal} onClickOutsideModalBody={handleCloseModal}>
        <ModalHeader>Today is {dayName}!</ModalHeader>
        <ModalBody>
          {message}
        </ModalBody>
        <ModalFooter>
          <Button type="primary" className="modal-button" onClick={handleCloseModal}>Close</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default MessageEveryday