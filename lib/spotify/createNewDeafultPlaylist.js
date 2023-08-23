import { getUserId } from "./getUserId";

export const createNewDefualtPlaylist = async (access_token) => {
    const id = await getUserId(access_token);
    const response = await fetch(`https://api.spotify.com/v1/users/${id}/playlists`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            "name": "New Playlist Spotify API new version",
            "description": "New playlist defualt description new Version",
            "public": false
        })
    })

    const playlist = await response.json()
    return playlist;
}