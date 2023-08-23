import Image from "next/image"
import emoji from '@/public/assets/img/sad_emoji.svg'
import { signIn } from "next-auth/react"

function NotSignedIn() {
    return (
        <div className='max-w-[19rem] h-80 rounded-[2rem] border-4 border-solid border-white flex justify-around items-center flex-col flex-nowrap mt-10 ml-10'>
            <Image
                src={emoji}
                width={"10rem"}
                height={"9rem"}
                alt='sad emoji'
            />
            <button onClick={() => signIn()} className='shadow-primary w-56 h-16 rounded-xl bg-white border-0 text-black text-3xl active:scale-[0.99]'>Sign In</button>
        </div>
    )
}

export default NotSignedIn