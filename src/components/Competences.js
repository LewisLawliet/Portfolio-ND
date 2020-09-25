import React from 'react';
import '../index.css';
import  {  withRouter} from 'react-router-dom'


class competences extends React.Component {
  state = {
      indexTechno: 0,
      indexOutil: 0

  }

   nextSlide =()=>{
          const indexTechno = this.state.indexTechno;  

          if(indexTechno < 5)  
            this.setState({indexTechno: this.state.indexTechno + 1})

          else {
            this.setState({indexTechno: 0})
          }  

    }



     previousSlide =()=>{
          const indexTechno = this.state.indexTechno;  

          if(indexTechno > 0)  
            this.setState({indexTechno: this.state.indexTechno - 1})

          else {
            this.setState({indexTechno: 5})
          }  

    }

    nextSlideOutil =()=>{
          const indexOutil = this.state.indexOutil;  

          if(indexOutil < 2)  
            this.setState({indexOutil: this.state.indexOutil + 1})

          else {
            this.setState({indexOutil: 0})
          }  

    }



     previousSlideOutil =()=>{
          const indexOutil = this.state.indexOutil;    

          if(indexOutil > 0)  
            this.setState({indexOutil: this.state.indexOutil - 1})

          else {
            this.setState({indexOutil: 2})
          }  

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

        

         const picsOutils = [
                        { img:<img className = "imgSlide" src="/images/postman-logo.png" />, id: 1},                      
                       
                        { img:<img className = "imgSlide" src="/images/visual.jpg" />, id: 2},
                        { img:<img className = "imgSlide" src="/images/sublime-text.jpg" />, id: 3}
                       
    
                    ]

         const imagesOutil = (<div className="imgConteneur">{picsOutils[this.state.indexOutil].img}</div>)            
      
        return (

            /*<div className="conteneurImgTechnos">*/
            <div className="homeConteneur">

               <div className="ConteneurPics">

                         <p className="titleCompetences">Mes Technos</p> 
                                        {imagesTechno}
                                        <div className="A">
                                            <div className="B">
                                                <div className = "button previous" onClick = {this.previousSlide} />
                                                <div className = "button next" onClick = {this.nextSlide} />
                                            </div>    
                                        </div>

                         <hr className ="séparation" />

                         <p className="titleCompetences">Mes Outils</p> 
                                        {imagesOutil}
                                        <div className="A">
                                            <div className="B">
                                                <div className = "button previous" onClick = {this.previousSlideOutil} />
                                                <div className = "button next" onClick = {this.nextSlideOutil} />
                                            </div>    
                                        </div>
   
                 </div>        
                        
        </div>     
                


                 
        
        );
    }
}


export default competences