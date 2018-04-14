import React ,{Component} from "react";
//import Gif from "../Gif";
import gifs from "../../images.json";
import Container from "../Container"

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

//1.  Functions for updating score and top score  2. Function for randomizing list of gifs indexes  3. Within gif class set a state if a gif is clicked
//4. define what the component should return as html as well as how to handle the incoming props

class Game extends Component {
    state = {
    	gifs,
    	score: 0,
    	highScore: 0
    }; 
	render () {
			
		return (
			<div>
        <h1>Pauls page</h1>
			<div>
					{this.state.gifs.map(item =>(
			
				
				
					<img src={item.image}/>
						))}
				
			
			</div>

			</div>
			
					
			)
	}
}


 export default Game;