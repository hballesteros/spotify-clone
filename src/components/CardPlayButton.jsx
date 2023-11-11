import { Pause, Play } from './Player';

export function CardPlayButton({ id }) {
  return (
    <div className="card-play-button">
      <button className="bg-green-500 rounded-full p-4">
        <Play className="w-5 h-5" />
      </button>
    </div>
  );
}