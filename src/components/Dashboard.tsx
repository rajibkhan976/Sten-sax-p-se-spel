import React, { useState, useEffect } from 'react';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';

const Dashboard = ({}) => {

  const [playersChoice, setPlayersChoice] = useState("");
  const [computersChoice, setComputersChoice] = useState("");
  const [playGame, setPlayGame] = useState("Play");
  const [result, setResult] = useState("");
  
  const choices: string[] = ["sten", "sax", "påse"];
  
  const play = () => {
	if (playersChoice === "" && computersChoice === "") {
		setPlayGame("Play again");
		let playersStrike: number = Math.floor(Math.random() * ((choices.length - 1) - 0 + 1) + 0);
		choices.forEach((element, index) => { 
			if (index === playersStrike) {
				let playersSelection: string = element;
				setPlayersChoice(playersSelection);
			} 
		});
		let computersStrike: number = Math.floor(Math.random() * ((choices.length - 1) - 0 + 1) + 0);
		choices.forEach((element, index) => { 
			if (index === computersStrike) {
				let computersSelection: string = element;
				setComputersChoice(computersSelection);
			} 
		});
	} else {
	setPlayGame("Play");
	setResult("");
	setPlayersChoice("");
	setComputersChoice("");
	}
  }
  
  useEffect(() => {
	if (playersChoice !== "" && computersChoice !== "") {
		if (playersChoice === "sten" && computersChoice === "sax") {
				setResult("Player won!");
			} else if (playersChoice === "sten" && computersChoice === "påse") {
				setResult("Computer won!");
			} else if (playersChoice === "sax" && computersChoice === "sten") {
				setResult("Computer won!");
			} else if (playersChoice === "sax" && computersChoice === "påse") {
				setResult("Player won!");
			} else if (playersChoice === "påse" && computersChoice === "sten") {
				setResult("Player won!");
			} else if (playersChoice === "påse" && computersChoice === "sax") {
				setResult("Computer won!");
			} else {
				setResult("Match drawn!");
			}
	}
  }, [playersChoice, computersChoice]);

  return (
    <div className="container">
		<div className="row mt-5">
			<div className="col-12">
				<h3>Sten, sax, påse spel</h3>
				<button className="btn btn-success mt-3" onClick={play}>{playGame}</button>
			</div>
		</div>
		<div className="row mt-4">
			<div className="col-6">
				<PlayerOne playersChoice={playersChoice} />
			</div>
			<div className="col-6">
				<PlayerTwo computersChoice={computersChoice} />
			</div>
		</div>
		<div className="row mt-4">
			<div className="col-12">
				{(result !== "") ?
				<h5 className="text-danger">{result}</h5>
				:
				null
				}
			</div>
		</div>
    </div>
  );
}

export default Dashboard;