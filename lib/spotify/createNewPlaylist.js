import { createNewDefualtPlaylist } from "@/lib/spotify/createNewDeafultPlaylist";
import { addDefaultSongsToPlaylists } from "@/lib/spotify/addDefaultSongsToPlaylist";

export const createNewPlaylist = async (access_token) => {
    const newPlaylist = await createNewDefualtPlaylist(access_token);
    const response = await addDefaultSongsToPlaylists(newPlaylist.id, access_token);

    return { playlist_id: newPlaylist.id, snapshot_id: response }
}