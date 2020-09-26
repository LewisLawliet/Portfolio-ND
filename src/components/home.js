import React from 'react';
import '../index.css';

import Presentation from './presentation';
import Apropos from './Apropos';




class Home extends React.Component {
    render() {
        return (
     <div className="homeConteneur">	
        
     	<Presentation /> 
     	<Apropos />  
     	
        <div className="download">
     		<a href="/images/_CV_Nadir Djebbar.pdf" target="_blank"  
            className="buttonCv" rel="noopener noreferrer">Télécharger CV</a>
     	
     	</div>   

	 </div>			
        );
    }
}

export default Home;
