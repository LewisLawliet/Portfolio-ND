import React from 'react';
import '../index.css';
//import pics from './TableauCarroussel'
//import "AC.jpg" from "../images/imgLoisirs";

class Loisirs extends React.Component {
    state = {

      indexFilmEtSerie: 0,
      indexManga: 0,        
      indexVideoGames: 0,
      AmericanHX: false
    }


    componentDidMount =()=> {
        
    }

    nextSlide =()=>{
          const indexFilm = this.state.indexFilmEtSerie;  

          if(indexFilm < 3)  
            this.setState({indexFilmEtSerie: this.state.indexFilmEtSerie + 1})

          else {
            this.setState({indexFilmEtSerie: 0})
          }  

    }



     previousSlide =()=>{
          const indexFilm = this.state.indexFilmEtSerie;  

          if(indexFilm > 0)  
            this.setState({indexFilmEtSerie: this.state.indexFilmEtSerie - 1})

          else {
            this.setState({indexFilmEtSerie: 3})
          }  

    }

    nextSlideManga =()=>{
          const indexManga = this.state.indexManga;  

          if(indexManga < 2)  
            this.setState({indexManga: this.state.indexManga + 1})

          else {
            this.setState({indexManga: 0})
          }  

    }



     previousSlideManga =()=>{
          const indexManga = this.state.indexManga;  

          if(indexManga > 0)  
            this.setState({indexManga: this.state.indexManga - 1})

          else {
            this.setState({indexManga: 2})
          }  

    }

    nextSlideVideoGames =()=>{
          const indexVideoGames = this.state.indexVideoGames;  

          if(indexVideoGames < 2)  
            this.setState({indexVideoGames: this.state.indexVideoGames + 1})

          else {
            this.setState({indexVideoGames: 0})
          }  

    }



     previousSlideVideoGames =()=>{
          const indexVideoGames = this.state.indexVideoGames;  

          if(indexVideoGames > 0)  
            this.setState({indexVideoGames: this.state.indexVideoGames - 1})

          else {
            this.setState({indexVideoGames: 2})
          }  

    }



  /* background =()=> {
        const indexFilm = this.state.indexFilmEtSerie;

        if (indexFilm == 0) {

            document.getElementsByClassName("imgSlide");
             for (var i=0; i<document.getElementsByClassName("imgSlide").length; i++) {
               document.getElementsByClassName("imgSlide")[i].style.backgroundImage=url("/images/imgLoisirs/backgroundAHX.jpeg")
           }
        }

    }*/

    render() {


    
        const picsfilmEtSerie = [
                        
                        { img:<img className = "imgSlide ahx" srcset="/images/imgLoisirs/AmericanHX.jpg" />,
                         background: "/images/imgLoisirs/backgroundAHX.jpeg",  id: 1},                    
                        
                        { img:<img className = "imgSlide" srcset="/images/imgLoisirs/inglourious_basterds.jpg" />, id: 2},
                       
                        { img:<img className = "imgSlide" srcset="/images/imgLoisirs/TWD.jpg" />, id: 3},
                        { img:<img className = "imgSlide" srcset="/images/imgLoisirs/Wu.jpg"/>, id: 4}
    
                    ]
       
                     
       const imagesfilm = (<div className="imgConteneur">{picsfilmEtSerie[this.state.indexFilmEtSerie].img}</div>)

        /*const imagesfilm = (<div className="imgConteneur"
         style={{background: `url("${picsfilmEtSerie[this.state.indexFilmEtSerie].background}")` }}>
         {picsfilmEtSerie[this.state.indexFilmEtSerie].img}</div>)*/
        

         const picsmanga = [
                        { img:<img className = "imgSlide" src="/images/imgLoisirs/AC.jpg" />, id: 1},                      
                       
                        { img:<img className = "imgSlide" src="/images/imgLoisirs/deathnote-light.jpg" />, id: 2},
                        { img:<img className = "imgSlide" src="/images/imgLoisirs/Dragon-Ball-Super.jpg" />, id: 3}
                       
    
                    ]

         const imagesmanga = (<div className="imgConteneur">{picsmanga[this.state.indexManga].img}</div>)


          const picsVideoGames = [
                        { img:<img className = "imgSlide" src="/images/imgLoisirs/Dishonored.jpg" />, id: 1},                      
                       
                        { img:<img className = "imgSlide" src="/images/imgLoisirs/majorasmask.jpeg" />, id: 2},
                        { img:<img className = "imgSlide" src="/images/imgLoisirs/the-last-of-us-fond.jpg" />, id: 3}
                       
    
                    ]

         const imagesVideoGames= (<div className="imgConteneur">{picsVideoGames[this.state.indexVideoGames].img}</div>) 

         console.log(picsfilmEtSerie[this.state.indexFilmEtSerie].img.background)


        return (
        <div className="homeConteneur">    
                    <div className="ConteneurPics">
                    	
                    	
                           <p className="titleLoisir">Films Et Séries</p> 
                            {imagesfilm}
                            <div className="A">
                                <div className="B">
                                    <div className = "button previous" onClick = {this.previousSlide} />
                                    <div className = "button next" onClick = {this.nextSlide} />
                                </div>    
                            </div>    
                       

                             <hr className ="séparation" />


                             <p className="titleLoisir">Manga</p>
                             {imagesmanga}
                            <div className="A">
                                <div className="B">
                                    <div className = "button previous" onClick = {this.previousSlideManga} />
                                    <div className = "button next" onClick = {this.nextSlideManga} />
                                </div>
                            </div>        

                             <hr className ="séparation" />


                             <p className="titleLoisir">Jeux Vidéo</p>
                             {imagesVideoGames}
                            <div className="A">
                                <div className="B">
                                    <div className = "button previous" onClick = {this.previousSlideVideoGames} />
                                    <div className = "button next" onClick = {this.nextSlideVideoGames} />

                                </div>
                            </div>        
        		</div>	
         </div>       
        );

    }
}


export default Loisirs;