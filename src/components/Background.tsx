import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Song from '../assets/song.mp3';
import './FixedAudioControl.css'; // 스타일 시트

const FixedAudioControl: React.FC = () => {
    const [isMuted, setIsMuted] = useState(false);

    const toggleMute = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault(); // 기본 버튼 동작 방지
        const audio = document.getElementById('background-audio') as HTMLAudioElement;
        if (audio) {
            audio.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <>
            <div className="fixed-audio-control">
                <div className='audio-control-button-wrapper'>
                    <button onClick={toggleMute} className="audio-control-button">
                        <FontAwesomeIcon icon={isMuted ? faVolumeXmark : faVolumeHigh} />
                    </button>
                </div>
            </div>
            <audio autoPlay loop id="background-audio" src={Song}/>
        </>
    );
};

export default FixedAudioControl;
