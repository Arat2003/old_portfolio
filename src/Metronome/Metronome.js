import React, { useState } from "react";
import "./metronome.css";
import beatHi from "./sounds/Teeth/Teeth_hi.wav";
// import beatLo from "./sounds/Teeth/Teeth_hi.wav";

const Metronome = () => {
	const [bpm, setBpm] = useState(100);
	const [isPlaying, setIsPlaying] = useState(false);
	const hiBeatSound = new Audio(beatHi);
	let timer = undefined;
	// const loBeatSound = new Audio(beatLo);

	const handleBpmChange = (e) => {
		setBpm(e.target.value);
		if (isPlaying) {
			clearInterval(timer);
			timer = setInterval(() => hiBeatSound.play(), (60 / bpm) * 1000);
		}
	};

	const handleStartStop = () => {
		console.log(isPlaying);
		// let newInterval;
		clearInterval(timer);
		if (isPlaying) {
			clearInterval(timer);
			setIsPlaying(false);
		} else {
			timer = setInterval(() => hiBeatSound.play(), (60 / bpm) * 1000);
			setIsPlaying(true);
		}
	};

	// const handleClick = () => {
	// 	timer = handleStartStop(timer);
	// };

	return (
		<main className="metronome__container">
			<div className="metronome__slider">
				<h1 className="slider-title">{bpm} BPM</h1>
				<input
					className="slider-input"
					type="range"
					min="50"
					max="220"
					value={bpm}
					onChange={handleBpmChange}
				/>
			</div>
			<button
				className="metronome__button"
				onClick={handleStartStop}
			>
				{isPlaying ? "Stop" : "Start"}
			</button>
		</main>
	);
};

export default Metronome;
