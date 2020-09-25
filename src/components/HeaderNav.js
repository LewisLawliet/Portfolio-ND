import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom';

class HeaderNav extends React.Component {
    render() {
        return (


           <header>
			<div className ="menu">
			
				<Link to ="/"><img src="./images/ND.png" className ="imgNd" /></Link>
				
					<ul>
						<li><Link to ="/">Accueil</Link></li>
						<li><Link to ="/portfolio">Portfolio</Link></li>
						<li><Link to="/competences">Compétences</Link></li>
						<li><Link to="/centres-d'-interet">Centres d'intérêt</Link></li>
						
					</ul>
			</div>
			<hr className="separationHeader" />
		</header>
        );
    }
}


export default HeaderNav;