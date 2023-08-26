
function NewPlaylistMessage({ content }) {

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
            <span className='gray-txt'>See Songs</span>

        </div>
    )
}

export default NewPlaylistMessage