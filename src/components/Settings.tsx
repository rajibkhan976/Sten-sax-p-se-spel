import React, { useState, useEffect } from 'react';

type SettingsProps = { 
						round: number, 
						handleChange: (event: any) => void,
						handleGameStatus: () => void,
						errorMessage: string
					 };

const Settings = ({ round, handleChange, handleGameStatus, errorMessage }: SettingsProps) => {

	return (
		<React.Fragment>
			<div className="form-group mt-4">
				<label>Please enter the number of sets you want to play :</label>
				<input type="number" className="form-control" name="round" min="1" onChange={(event) => handleChange(event)} />
				{(errorMessage !== "") ?
				<div className="mt-3">
					<span className="text-primary">{errorMessage}</span>
				</div>
				:
				null
				}
				<button className="btn btn-success mt-3" onClick={() => handleGameStatus()}>Start</button>
			</div>
		</React.Fragment>
	);
}

export default Settings;