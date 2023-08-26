
function NewPlaylistMessage({ content }) {

    return (
        <div>
            <div className='ml-10'>
                <h1 className='primary-title'>New Playlist created</h1>
                <div className='flex flex-col flex-nowrap justify-start items-start text-3xl pb-6'>
                    <label>Name</label>
                    <p>{content.playlist?.name}</p> <br />
                    <label>Description</label>
                    <p>{content.playlist?.description}</p>
                </div>
            </div>
            <span className='gray-txt'>See Songs</span>

        </div>
    )
}

export default NewPlaylistMessage