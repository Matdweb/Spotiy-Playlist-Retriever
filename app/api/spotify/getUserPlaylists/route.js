import { NextResponse } from "next/server";
import { getUsersPlaylists } from "@/lib/spotify/getUsersPlaylists";

export async function POST(request) {
    const { access_token } = await request.json();

    const response = await getUsersPlaylists(access_token);
    const { items } = await response.json();

    return NextResponse.json({ playlists: items });
}