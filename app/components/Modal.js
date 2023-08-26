
function Modal({ toggleModal }) {

    const defaultSongs = [{
        id: 0,
        artist: "Ed Sheeran",
        song: "Photograph"
    }, {
        id: 1,
        artist: "Taylor Swift",
        song: "Bad Blood"
    }];

    return (
        <div onClick={() => toggleModal()} className='top-0 left-0 w-screen h-screen fixed bg-black/90 flex justify-center items-center'>
            <div className='bg-black w-[40rem] rounded-3xl border-4 border-solid border-white flex justify-start items-start flex-col flex-nowrap py-12 px-8 text-2xl'>
                <h1 className='primary-title' style={{marginTop: "0"}}>Important</h1>
                <p className='text-xl sm:text-3xl mb-12 sm:mb-16 '>This is just an experimental app so you
                    can’t choose the songs in your new playlists</p>

                <p>For now your playlists has this songs:</p>
                <div className='flex flex-row flex-nowrap'>
                    {defaultSongs.map((element,i) => {
                        return (
                            <p key={element.id}>
                                {element.artist} <span className='opacity-60'>{element.song}</span>
                                { i !== defaultSongs.length-1 ? <span className='mx-1.5'>•</span> : '' }
                            </p>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Modal