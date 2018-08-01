import React from 'react';
import './score.scss';



const Score = (props) => 
<div  className={`score-style} `}  >
Total Score:{props.score}
Current Level:{props.level}
</div>

export default Score;

