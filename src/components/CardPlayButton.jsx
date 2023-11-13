import { Pause, Play } from './Player'
import { usePlayerStore } from '@/store/playerStore'

export function CardPlayButton({ id }) {

    const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

    const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

    const handleClick = () => {

        if (isPlayingPlaylist) {
            setIsPlaying(false)
            return
        }

        //promises
        fetch(`/api/get-info-playlist.json?id=${id}`)
            .then(res => res.json())
            .then(data => {
                const { songs, playlist } = data
                setIsPlaying(true)
                setCurrentMusic({ songs, playlist, song: songs[0] })

                console.log({ songs, playlist })
            })

        // async await
        // const res = await fetch(`/api/get-info-playlist.json?id=${id}`)
        // const data = await res.json()
        // const { songs, playlist } = data
    }

    return (
        <div className="card-play-button">
        <button 
            className="bg-green-500 rounded-full p-4"
            onClick={handleClick}
        >
            {isPlayingPlaylist ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </button>
        </div>
    );
}