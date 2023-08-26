import Image from 'next/image';
import defualtImg from '@/public/assets/img/defaultPlaylistImg.png'

function Playlist({ content }) {
    return (
        <div className='ml-10 text-xl sm:text-3xl'>
            <h1 className='primary-title'>{content.name}</h1>
            <div className='w-full flex flex-row flex-nowrap justify-start items-end'>
                <Image
                    className='mr-4 sm:mr-8 w-32 h-32 sm:w-60 sm:h-60'
                    src={content.images[0] ? content.images[0]?.url : defualtImg}
                    width={213}
                    height={213}
                    alt='Playlist image'
                />
                <div>
                    <label>Owner</label>
                    <p>{content?.owner.display_name}</p> <br />
                    <label>Description</label>
                    <p>{content?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Playlist