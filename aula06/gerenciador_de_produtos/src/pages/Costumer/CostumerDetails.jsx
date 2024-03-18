import React , { useState } from 'react'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import './CostumerDetails.css'

const CostumerDetails = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    function closeModal () {
        setIsOpen(false);
    }
  return (
    <div>
        <Modal 
            isOpen = {modalIsOpen}
            onRequestClose={closeModal}
            contenteLable="Modal de adição de Usuário"
            ariaHideApp={false}
            className="modal-content"
            >
        
                <h2>Adicionar nov Usuário</h2>
                <button onClick={closeModal} className='close'>
                    <FontAwesomeIcon icon={faSquareXmark}/>
                </button>
                <div>Sou um Modal</div>
        </Modal >
    </div>
  )
}

export default CostumerDetails