import axios from 'axios';
import { toast } from '@/components/ui/use-toast';

export interface SpotifyTrack {
  id: string;
  artist: string;
  title: string;
  album: string;
  cover: string;
  releaseDate: string;
  downloadLink: string;
}

export const fetchSpotifyTrack = async (songId: string): Promise<SpotifyTrack> => {
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
  
  if (!apiKey) {
    throw new Error('API key not found in environment variables');
  }

  try {
    const options = {
      method: 'GET',
      url: 'https://spotify-downloader9.p.rapidapi.com/downloadSong',
      params: { songId },
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': 'spotify-downloader9.p.rapidapi.com'
      }
    };

    const response = await axios.request(options);
    return response.data.data;
  } catch (error) {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to fetch track information. Please try again.",
    });
    throw error;
  }
};