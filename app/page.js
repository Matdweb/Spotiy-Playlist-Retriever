'use client'
import { useSession, signIn, signOut } from 'next-auth/react';
import { useState } from 'react';
import NotSignedIn from './components/NotSignedIn';
import SignedIn from './components/SignedIn';
import Playlist from './components/Playlist';
import NewPlaylistMessage from './components/NewPlaylistMessage';

export default function Home() {
  const { data: session } = useSession();
  const [list, setList] = useState([]);
  const [newPlaylist,setNewPlaylist] = useState({});
  const [newPlaylistCreated, setNewPlaylistCreated] = useState(false);

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

    try {
      const data = await response.json();
      console.log(data);
      setNewPlaylistCreated(true);
      setNewPlaylist(data);
    } catch (e) {
      console.log(e);
    }
  }

  const toggleCleanPage = () => {
    setList([]);
    setNewPlaylistCreated(false);
  }

  if (session) {
    return (
      <div className='mb-40'>
        <SignedIn />
        <button className='btn-primary' onClick={() => getMyPlaylists()}>Get all my playlists</button>
        <button className='btn-primary' onClick={() => createNewPlaylist()}>Create new playlists</button>
        <span className='gray-txt' onClick={() => toggleCleanPage()}>Clean Page</span>

        {newPlaylistCreated ? <NewPlaylistMessage content={newPlaylist} /> : ''}

        {list.map((item) => (
          <Playlist key={item.id} content={item} />
        ))}
      </div>
    );
  }
  return (
    <NotSignedIn />
  );
}

