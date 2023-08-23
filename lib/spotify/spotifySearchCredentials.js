//client credentials
const client_id = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
const client_secret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET;
//String created combining the client credentials in a base64 string
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
//TOKEN_ENDOPOINT the url to make the access token request 
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
//PLAYLIST_ENDPOINT the url to make the playlist's request to the Spotify API 
const PLAYLISTS_ENDPOINT = 'https://api.spotify.com/v1/me/playlists';

export const SpotifyCredentials = {
    basic,
    TOKEN_ENDPOINT,
    PLAYLISTS_ENDPOINT
}