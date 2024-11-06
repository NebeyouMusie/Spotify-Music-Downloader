import React from 'react';
import SpotifyInput from '@/components/SpotifyInput';
import { useQuery } from '@tanstack/react-query';
import { fetchSpotifyTrack } from '@/lib/spotify';
import LoadingState from '@/components/LoadingState';
import SongCard from '@/components/SongCard';
import { useState } from 'react';
import { ModeToggle } from '@/components/mode-toggle';

const Index = () => {
  const [url, setUrl] = useState('');

  const { data: track, isLoading } = useQuery({
    queryKey: ['track', url],
    queryFn: () => fetchSpotifyTrack(url),
    enabled: !!url,
  });

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      
      <div className="max-w-4xl mx-auto space-y-8 pt-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
              alt="Spotify Logo"
              className="w-64 h-64 object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold">Music Downloader</h1>
          <p className="text-muted-foreground">
            Enter a Spotify track URL to download your favorite music
          </p>
        </div>

        <SpotifyInput onSubmit={setUrl} isLoading={isLoading} />

        {isLoading && <LoadingState />}
        {track && <SongCard track={track} />}
      </div>
    </div>
  );
};

export default Index;