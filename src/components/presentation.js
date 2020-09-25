import React from 'react';
import '../index.css';

class Presentation extends React.Component {
    render() {
        return (

        <div>	
           <section className="presentation">
				<div className="conteneurImage">
				<img src="images/logo_portfolio.png" className="pc" />
				</div>

				<div className="description">	
				<p className="titleQuiSuisJe">QUI SUIS-JE ?</p>	
				<p className="me">
				   Ancien Conseiller Clientèle, je suis quelqu'un qui aime sans cesse apprendre.
				   N'ayant pas peur de l'inconnu, je laisse ma curiosité m'orientée dans l'apprentissage de nouveaux univers.
				   De nature joviale, j'aime rire et partager des moments avec le reste de l'équipe.
				   Ma citation préférée: «Plus vous saurez regarder loin dans le passé, plus vous verrez loin dans le futur »


				</p>
				</div>		

			</section>
         <hr className ="séparation" />
		</div>	
        );
    }
}


export default Presentation;