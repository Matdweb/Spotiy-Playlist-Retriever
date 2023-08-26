'use client'
import { useState } from "react";
import Modal from "./Modal";

function NewPlaylistMessage({ content }) {
    const [modal,setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }

    return (
        <div>
            <div className='ml-10'>
                <h1 className='primary-title'>New Playlist created</h1>
                <div className='flex flex-col flex-nowrap justify-start items-start text-3xl pb-8'>
                    <label>Name</label>
                    <p>{content.new_playlist?.name}</p> <br />
                    <label>Description</label>
                    <p>{content.new_playlist?.description}</p>
                </div>
            </div>
            <span onClick={()=> toggleModal()} className='gray-txt'>See Songs</span>

            { modal ? <Modal toggleModal={toggleModal} /> : '' }

        </div>
    )
}

export default NewPlaylistMessage