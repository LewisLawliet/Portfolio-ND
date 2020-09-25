import React from 'react';
import '../index.css';
import Loisirs from "./Loisirs"

import  {  withRouter} from 'react-router-dom'


class CentresInterets extends React.Component {
    render() {
        return (
     <Loisirs />	

          

	 	
        );
    }
}

export default withRouter(CentresInterets)