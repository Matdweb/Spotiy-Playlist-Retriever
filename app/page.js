'use client'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';

export default function Home() {
  const { data: session } = useSession();
  const [list, setList] = useState([]);

  const getMyPlaylists = async () => {
    const refresh_token = session.token.accessToken;

    const response = await fetch('api/spotify/getUserPlaylists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token,
      })
    })

    try {
      const { playlists } = await response.json();
      console.log(playlists);
      setList(playlists)
    } catch (e) {
      console.log(e);
    }
  };

  const createNewPlaylist = async () => {
    const refresh_token = session.token.accessToken;
    
    const response = await fetch('api/spotify/createNewPlaylist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh_token,
      })
    })

    const data = await response.json();
    console.log(data);
  }

  if (session) {
    return (
      <>
        Signed in as {session?.token?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <hr />
        <button onClick={() => getMyPlaylists()}>Get all my playlists</button><br/>
        <button onClick={() => createNewPlaylist()}>Create new playlists</button>
        {list.map((item) => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <img src={item.images[0]?.url} width="100" />
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

