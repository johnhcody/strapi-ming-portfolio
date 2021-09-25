import React, { useState } from 'react'
import Link from 'next/link'
import Modal from 'react-modal'
import { Routes } from '../../../routes'

export const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    
    return (
        <div className="header-wrapper">
            <Link href="/">
                <a> M.R. </a>
            </Link>
            <div className="header-right-wrapper">
                {modalIsOpen ? 
                <i onClick={() => setModalIsOpen(true)} className="fas fa-times transition-opacity duration-1000 ease-in-out"></i>
                : <i onClick={() => setModalIsOpen(true)} className="fas fa-bars transition-opacity duration-1000 ease-in-out"></i>
                }
            </div>
            <Modal className="modal" ariaHideApp={false} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} closeTimeoutMS={1000} style={{
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
                        <Link  href={Routes.ABOUT}>
                            <a onClick={() => setModalIsOpen(false)} > About </a>
                        </Link>
                        <Link href={Routes.ARTICLES}>
                            <a onClick={() => setModalIsOpen(false)} > Articles </a>
                        </Link>
                        <Link href={Routes.BLOG}>
                            <a onClick={() => setModalIsOpen(false)} > Blog </a>
                        </Link>
                        <Link href={Routes.PROJECTS}>
                            <a onClick={() => setModalIsOpen(false)} > Projects </a>
                        </Link>
                        <Link href={Routes.CV}>
                            <a onClick={() => setModalIsOpen(false)} > Contact </a>
                        </Link>
                        <a></a>
                    </div> 
            </Modal>
        </div>
    )
}

export default Header
