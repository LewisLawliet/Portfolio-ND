import React from 'react';
import '../index.css';




class Portfolio extends React.Component {
    render() {
        return (
     <div className="ConteneurPortfolio">

     	

     		
     		<div>
     			<p className="portfolioLink">Portfolio projet</p>	
		     	 <a href="https://github.com/LewisLawliet/Portfolio-ND" target="_blank"  rel="noopener noreferrer">	
		     	<img className="projetPortfolio" src="/images/testPortfolio.png" />
		     	</a>
		    </div> 	


		    <div> 	
		     	 <p className="gjiLink">GJI projet</p>
		         <a href="https://github.com/LewisLawliet/FrontFilrouge" target="_blank"  rel="noopener noreferrer">
		         <img className="projetGaidjinInforme" src="/images/testPortfolio2.png" />
		         </a>
		    </div>     
	 </div>			
        );
    }
}

export default Portfolio;