import React, { useState, useEffect } from 'react';

type PlayerTwoProps = { computersChoice: string };

const PlayerTwo = ({ computersChoice }: PlayerTwoProps) => {

  return (
    <React.Fragment>
      <h4 className="text-primary">Computer</h4>
	  {(computersChoice !== "") ?
	  <div>
	  <h6 className="text-secondary">Choose: {computersChoice}</h6>
	  </div>
	  :
	  null
	  }
    </React.Fragment>
  );
}

export default PlayerTwo;