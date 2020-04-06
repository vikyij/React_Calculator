// Import React (Mandatory Step). 
import React from 'react'; 
// Import Output Screen Row. 
import OutputScreenRow from './OutputScreenRow'; 

// Functional Component. 
// Use to hold two Screen Rows. 
const OutputScreen = (props) => { 
return ( 
	<div className="screen"> 
	<OutputScreenRow value = {props.question} /> 
	<OutputScreenRow value = {props.answer}/> 
	</div> 
) 
} 

// Export Output Screen. 
export default OutputScreen; 
