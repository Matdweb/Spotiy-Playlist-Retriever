'use client'
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image'
import user_img from '@/public/assets/img/user_img.svg'

function SignedIn() {
    const { data: session } = useSession();

    return (
        <div className='max-w-[19rem] h-[22rem] rounded-[2rem] border-4 border-solid border-white flex justify-around items-center flex-col flex-nowrap mt-10 ml-10 mb-16'>
            <div className='mt-8 w-full flex flex-col flex-nowrap justify-around items-center'>
                <Image
                    src={user_img}
                    width='10rem'
                    height='10rem'
                    alt='Defualt user image'
                />
                <p className='text-white font-normal text-xl mt-5 mb-2'>Sign In as</p>
                <span className='bold-txt'>{session?.token?.name}</span>
            </div>
            <p className='opacity-70 mt-8 mb-5 underline cursor-pointer' onClick={() => signOut()}>Sign Out</p>
        </div>
    )
}

export default SignedIn