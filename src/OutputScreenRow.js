// Import React (Mandatory Step). 
import React from 'react'; 

// Functional Component. 
// Used to show Question/Answer. 
const OutputScreenRow = (props) => { 
return ( 
	<div className="screen-row"> 
	<input type="text" value = {props.value} readOnly/> 
	</div> 
) 
} 

// Export Output Screen Row. 
export default OutputScreenRow; 
