import { SpotifyCredentials } from "./spotifySearchCredentials";

export const getAccessToken = async (refresh_token) => {
    const response = await fetch(SpotifyCredentials.TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: 'Basic ' + SpotifyCredentials.basic,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: "refresh_token",
            refresh_token,
            code: refresh_token,
            redirect_uri: 'http://localhost:3000/api/auth/callback/spotify',
        }),
    });

    const { access_token } = await response.json()
    return access_token;
}