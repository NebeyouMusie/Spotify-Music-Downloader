import React from 'react';
import SpotifyInput from '@/components/SpotifyInput';
import { useQuery } from '@tanstack/react-query';
import { fetchSpotifyTrack } from '@/lib/spotify';
import LoadingState from '@/components/LoadingState';
import SongCard from '@/components/SongCard';
import { useState } from 'react';
import { ModeToggle } from '@/components/mode-toggle';
import { Alert, AlertDescription } from "@/components/ui/alert";

const Index = () => {
  const [url, setUrl] = useState('');

  const { data: track, isLoading, isFetched } = useQuery({
    queryKey: ['track', url],
    queryFn: () => fetchSpotifyTrack(url),
    enabled: !!url,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      
      <div className="max-w-4xl w-full space-y-6">
        <div className="text-center space-y-4">
          <div className="h-32 flex items-center justify-center">
            <img
              src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png"
              alt="Spotify Logo"
              className="h-full object-contain"
            />
          </div>
          <h1 className="text-4xl font-bold">Music Downloader</h1>
          <p className="text-muted-foreground">
            Enter a Spotify track URL to download your favorite music
          </p>
        </div>

        <SpotifyInput onSubmit={setUrl} isLoading={isLoading} />

        {isLoading && <LoadingState />}
        {isFetched && !isLoading && !track && (
          <Alert>
            <AlertDescription>
              No track found. Please check the URL and try again.
            </AlertDescription>
          </Alert>
        )}
        {track && <SongCard track={track} />}
      </div>
    </div>
  );
};

export default Index;