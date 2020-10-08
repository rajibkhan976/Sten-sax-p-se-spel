import React, { useState, useEffect } from 'react';

type PlayerOneProps = { playersChoice: string };

const PlayerOne = ({ playersChoice }: PlayerOneProps) => {

  return (
    <React.Fragment>
      <h4 className="text-primary">Player</h4>
	  {(playersChoice !== "") ?
	  <div>
	  <h6 className="text-secondary">Choose: {playersChoice}</h6>
	  </div>
	  :
	  null
	  }
    </React.Fragment>
  );
}

export default PlayerOne;