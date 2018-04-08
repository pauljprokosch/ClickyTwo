import React from "React";
import Gif from "../Gif";
import gifs from "../../images.json";

// If a user selects an image 
//  If the image has already been clicked on
//      then score resets and the board shuffles
//If the image has not already been clicked on
//      then score increments by 1 and the board shuffles
//      If the score is lower than the top score
//           Then the score increments and the board shuffles
//      If the score is equal to the top score
//           Then the top score and the score increment, and the board shuffles

//app, game, gif (keep track of state whether it's been clicked or not)

class Game extends React.Component {
    state = {
    	gifs,
    	score: 0,
    	highScore: 0
    }; 
	render () {
		return (
			<h1>
			Header One
			</h1>
			{
				this.state.gifs.map((gif)=>  (
				<Gif
					id= {gif.id}
					image = {gif.image}
					key = {gif.id}
				)
			}
			);
	}
}