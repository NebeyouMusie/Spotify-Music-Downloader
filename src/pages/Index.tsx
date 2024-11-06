import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { ModeToggle } from '@/components/mode-toggle';
import SpotifyInput from '@/components/SpotifyInput';
import LoadingState from '@/components/LoadingState';
import SongCard from '@/components/SongCard';
import { fetchSpotifyTrack } from '@/lib/spotify';
import { useState } from 'react';

const Index = () => {
  const [songUrl, setSongUrl] = useState<string | null>(null);

  const { data: track, isLoading } = useQuery({
    queryKey: ['track', songUrl],
    queryFn: () => songUrl ? fetchSpotifyTrack(songUrl) : null,
    enabled: !!songUrl,
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
              className="h-12 sm:h-16"
            />
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold">Music Downloader</h1>
          <p className="text-muted-foreground">
            Enter a Spotify song URL to download your favorite tracks
          </p>
        </div>

        <SpotifyInput
          onSubmit={setSongUrl}
          isLoading={isLoading}
        />

        {isLoading && <LoadingState />}
        
        {track && <SongCard track={track} />}
      </div>
    </div>
  );
};

export default Index;