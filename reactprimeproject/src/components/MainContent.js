import React from "react";
import exemploImagem from '../images/image.jpg';
import exemploVideo from  '../videos/video.mp4';
import exemploAudio from '../audios/audio.mp3';

const MainContent = () => {
    return (
        <main>
            <h2>This is the main content of the website.</h2>
            <img src={exemploImagem} alt="Example" />
            <video controls>
                <source src={exemploVideo} type="video/mp4" />
                Your browser does not support the video element.
            </video>
            <audio controls>
                <source src={exemploAudio} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
        </main>
    );
};

export default MainContent;
