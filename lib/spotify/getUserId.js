export const getUserId = async (access_token) => {
    const response = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    });
    const { id } = await response.json();
    return id;
};