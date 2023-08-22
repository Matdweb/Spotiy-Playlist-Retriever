import { NextResponse } from "next/server";
import { getUsersPlaylists } from "@/lib/spotify/getUsersPlaylists";
import { getAccessToken } from "@/lib/spotify/getAccessToken";

export async function POST(request) {
    const { refresh_token } = await request.json();
    const access_token = await getAccessToken(refresh_token);

    const response = await getUsersPlaylists(access_token);
    const { items } = await response.json();

    return NextResponse.json({ playlists: items });
}