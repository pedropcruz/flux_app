import React, {Component} from 'react';
import logo from '../logo.svg';

class Logo extends Component{
    render(){
        return(
            <a href="/" className="block center pt2">
                <figure className="m0">
                    <picture>
                        <img src={logo} alt="Flux" className="fit block"/>
                    </picture>
                </figure>
            </a>
        )
    }


}

export default Logo;