import { NextResponse } from "next/server";
import { getAccessToken } from "@/lib/spotify/getAccessToken";
import { createNewPlaylist } from "@/lib/spotify/createNewPlaylist";

export async function POST(request) {
    const { refresh_token } = await request.json();
    const access_token = await getAccessToken(refresh_token);
    const { playlist_id, snapshot_id } = await createNewPlaylist(access_token);

    return NextResponse.json({ playlist_id, snapshot_id })
}