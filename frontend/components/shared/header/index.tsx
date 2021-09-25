import React, { useState } from 'react'
import Link from 'next/link'
import Modal from 'react-modal'



export const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const openModal = () => {
        setModalIsOpen(true);
    }

    const closeModal = () => { 
        setModalIsOpen(false);
    }

    
    return (
        <div className="header-wrapper">
            <Link href="/">
                <a> M.R. </a>
            </Link>
            <div className="header-right-wrapper">
                <i onClick={openModal} className="fas fa-bars"></i>
            </div>
            <Modal className="modal" ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={closeModal} closeTimeoutMS={1000} style={{
                overlay: {
                    backgroundColor: 'transparent'
                },
                content: {
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    margin: '0px',
                    top: '40px',
                    left: '0px',
                    right: '0px',
                    bottom: '0px',
                    background: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    outline: 'none',
                    padding: '50px'
                }
            }}>
                <div className="modal-link-wrapper">
                        <Link  href="/about">
                            <a onClick={closeModal} > About </a>
                        </Link>
                        <Link href="/portfolio">
                            <a onClick={closeModal} > Articles </a>
                        </Link>
                        <Link href="/blog">
                            <a onClick={closeModal} > Blog </a>
                        </Link>
                        <Link href="/projects">
                            <a onClick={closeModal} > Projects </a>
                        </Link>
                        <Link href="/cv">
                            <a onClick={closeModal} > Contact </a>
                        </Link>
                        <a></a>
                    </div> 
            </Modal>
        </div>
    )
}

export default Header
