import React from 'react';
import '../index.css';
/*import ReactDOM from 'react-dom';
import "react-responsive-carousel-v2/dist/carousel.css";
import { Carousel } from 'react-responsive-carousel-v2';*/
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';





class Technos extends React.Component {
  state = {
      indexTechno: 0

  }

     render() {
         const picsTechno= [
                        
                        { img:<img className = "imgSlide" srcset="images/htmlCssJs.jpg" />, id: 1},                    
                        
                        { img:<img className = "imgSlide" srcset="images/reactjs.jpg" />, id: 2},
                       
                        { img:<img className = "imgSlide" srcset="/images/wordpress.jpg" />, id: 3},
                        { img:<img className = "imgSlide" srcset="/images/mongo-db-logo.png"/>, id: 4},
                        { img:<img className = "imgSlide" srcset="/images/node.jpg"/>, id: 5},
                        { img:<img className = "imgSlide" srcset="/images/expressjs.png"/>, id: 6}
    
                    ]
       
                     
       const imagesTechno = (<div className="imgConteneur">{picsTechno[this.state.indexTechno].img}</div>)

        /*const imagesfilm = (<div className="imgConteneur"
         style={{background: `url("${picsfilmEtSerie[this.state.indexFilmEtSerie].background}")` }}>
         {picsfilmEtSerie[this.state.indexFilmEtSerie].img}</div>)*/
        

         const picsmanga = [
                        { img:<img className = "imgSlide" src="/images/imgLoisirs/AC.jpg" />, id: 1},                      
                       
                        { img:<img className = "imgSlide" src="/images/imgLoisirs/deathnote-light.jpg" />, id: 2},
                        { img:<img className = "imgSlide" src="/images/imgLoisirs/Dragon-Ball-Super.jpg" />, id: 3}
                       
    
                    ]
      
        return (

        	<div className="conteneurImgTechnos">
             <p className="titleTechno">Mes Technos</p> 
                            {imagesTechno}
                            <div className="A">
                                <div className="B">
                                    <div className = "button previous" onClick = {this.previousSlide} />
                                    <div className = "button next" onClick = {this.nextSlide} />
                                </div>    
                            </div>
              <hr className ="séparation" />   
                        
        </div>     
        		


		         
		
        );
    }
}


//ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default Technos;