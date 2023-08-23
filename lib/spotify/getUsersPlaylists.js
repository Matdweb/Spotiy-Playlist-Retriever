import { SpotifyCredentials } from "./spotifySearchCredentials";

export const getUsersPlaylists = async (access_token) => {
    return fetch(SpotifyCredentials.PLAYLISTS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
}
