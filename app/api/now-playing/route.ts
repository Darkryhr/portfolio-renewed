import { getNowPlaying } from '@/lib/spotify';
import { NextApiResponse } from 'next';
import { NextResponse, type NextRequest } from 'next/server';

export async function GET(req: NextRequest, res: NextApiResponse) {
  try {
    const response = await getNowPlaying();

    if (response.status === 204 || response.status > 400) {
      NextResponse.json({ isPlaying: false });
      return;
    }

    const song = await response.json();

    if (song.item === null) {
      NextResponse.json({ isPlaying: false });
    }

    const isPlaying = song.is_playing;
    const title = song.item.name;
    const artist = song.item.artists.map(_artist => _artist.name).join(', ');
    const album = song.item.album.name;
    const albumImageUrl = song.item.album.images[0].url;
    const songUrl = song.item.external_urls.spotify;

    NextResponse.json({
      album,
      albumImageUrl,
      artist,
      isPlaying,
      songUrl,
      title,
    });
  } catch (error) {
    NextResponse.json({ message: 'not working' }, { status: 500 });
  }
}
