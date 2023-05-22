import { useEffect, useRef } from "react";
import MediaAssets from "../Assets";
import ToolBarComponent from "./ToolBarComponent";

const TextEditorComponent = () => {
	let canvas = useRef();
	let ctx = null;
	let x = 100;
	let y = 70;
	let keyHistory = "";

	useEffect(() => {
		// dynamically assign the width and height to canvas
		const canvasEle = canvas.current;
    console.log(canvasEle, 'canvaaas');
		canvasEle.width = canvasEle.clientWidth;
		canvasEle.height = canvasEle.clientHeight;
		// get context of the canvas
		ctx = canvasEle.getContext("2d");
	}, []);

	const writeText = (letter, style = {}) => {
		keyHistory += letter;
		const {
			fontSize,
			fontFamily = "Arial",
			color = "black",
			textAlign = "left",
			textBaseline = "top",
		} = style;

		ctx.beginPath();
		ctx.font = fontSize ? fontSize : 16 + "px " + fontFamily;
		ctx.textAlign = textAlign;
		ctx.textBaseline = textBaseline;
		ctx.fillStyle = color;
		ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
		const words = keyHistory.split("");
		let currentX = x;
		let currentY = y;

		console.log(words, "words");
		words.forEach((word, index) => {
			const wordWidth = ctx.measureText(word).width;

			if (index > 0 && currentX + wordWidth > canvas.current.width) {
				// Move to the next line if the word exceeds the canvas width
				currentX = x;
				currentY += parseInt(fontSize || 16, 10) + 10;
			}

			ctx.fillText(word, currentX, currentY);
			ctx.stroke();
			currentX += wordWidth + ctx.measureText(" ").width;
		});
	};

	function keyDownHandler(event) {
		var letters = "abcdefghijklmnopqrstuvwxyz";
		var key = event.keyCode;
		if (key === 8) {
			// Backspace key
			if (keyHistory.length > 0) {
				keyHistory = keyHistory.slice(0, -1);
				writeText(""); // Clear canvas and rewrite the text
			}
		} else if (key === 32) {
			// Spacebar key
			event.preventDefault(); // Prevent default scrolling behavior
			writeText(" "); // Add a space to the text
		} else if (key === 13) {
			// Enter key
			event.preventDefault(); // Prevent new line in input field
			writeText("\n"); // Add a line break to the text
		} else if (key > 64 && key < 91) {
			// Letters A-Z
			const letter = letters.substring(key - 64, key - 65);
			writeText(letter); // Add the letter to the text
		}
	}

	return (
		<div style={{ display: "flex" }}>
			<div style={{flexGrow:1}}>
				<ToolBarComponent />
				<div
          className="canvas-container"
				>
					<canvas
						tabIndex="0"
						onKeyDown={(e) => {
							keyDownHandler(e);
						}}
						ref={canvas}
            className="canvas"
					></canvas>
				</div>
			</div>
			<div className="sub-apps-container">
        <img src={MediaAssets.calendar} width={30} height={30} alt=""  />
        <img src={MediaAssets.keep} width={30} height={30}alt=""  />
        <img src={MediaAssets.tasks} width={30} height={30} alt=""  />
        <img src={MediaAssets.contacts} width={30} height={30} alt=""  />
        <img src={MediaAssets.maps} width={30} height={30} alt=""  />
      	
			</div>
		</div>
	);
};

export default TextEditorComponent;
