import React from 'react';
import { Button } from '@/components/ui/button';
import { SpotifyTrack } from '@/lib/spotify';
import { Calendar, Download, Music } from 'lucide-react';

interface SongCardProps {
  track: SpotifyTrack;
}

const SongCard: React.FC<SongCardProps> = ({ track }) => {
  return (
    <div className="w-full max-w-2xl mx-auto glass rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-48 h-48 flex-shrink-0">
          <img
            src={track.cover}
            alt={track.title}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        
        <div className="flex-1 space-y-4">
          <div>
            <h2 className="text-2xl font-bold truncate">{track.title}</h2>
            <p className="text-lg text-muted-foreground">{track.artist}</p>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Music className="w-4 h-4" />
              <span>{track.album}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>{new Date(track.releaseDate).toLocaleDateString()}</span>
            </div>
          </div>
          
          <Button
            className="w-full md:w-auto"
            onClick={() => window.open(track.downloadLink, '_blank')}
          >
            <Download className="w-4 h-4 mr-2" />
            Download Track
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SongCard;