import React, { useState, useEffect } from 'react';
import PlayerOne from './PlayerOne';
import PlayerTwo from './PlayerTwo';
import Settings from './Settings';

const Dashboard = ({}) => {
  
  const [round, setRound] = useState(0);
  const [gameStatus, setGameStatus] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [playersChoice, setPlayersChoice] = useState("");
  const [computersChoice, setComputersChoice] = useState("");
  const [playGame, setPlayGame] = useState("Play");
  const [result, setResult] = useState("");
  
  const choices: string[] = ["sten", "sax", "påse"];
  
  const handleChange = (event: any) => {
	if (event.target.name === "round") {
		setErrorMessage("");
		setRound(event.target.value);
	}
  }
  
  const handleGameStatus = () => {
	if (round !== 0) {
		setErrorMessage("");
		setGameStatus(true);
	} else {
		setErrorMessage("Please enter a number greater than 0");
	}
  }
  
  const play = () => {
	if (round !== 0) {
		if (playersChoice === "" && computersChoice === "") {
			let decrementRound: number = round - 1;
			setRound(decrementRound);
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
	} else {
		setPlayGame("Play");
		setResult("");
		setPlayersChoice("");
		setComputersChoice("");
		setGameStatus(false);
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
				{(round !== 0 && gameStatus !== false) ?
				<p className="text-primary mt-3">Number of sets: {round}</p>
				:
				null
				}
				{gameStatus ?
				<button className="btn btn-success mt-3" onClick={play}>{playGame}</button>
				:
				<Settings 
				round={round} 
				handleChange={handleChange} 
				handleGameStatus={handleGameStatus}
				errorMessage={errorMessage}
				/>
				}
			</div>
		</div>
		{gameStatus ?
		<div>
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
		:
		null
		}
    </div>
  );
}

export default Dashboard;