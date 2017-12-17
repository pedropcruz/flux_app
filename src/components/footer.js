import React, {Component} from 'react';

class Footer extends Component{
    render(){
        return(
            <footer className="fixed bottom-0">
                <ul className="list-reset relative flex self-center items-center justify-end m0">
                    <li className="mx1">
                        <a href="/">
                            Follow Us
                        </a>
                    </li>
                    <li className="mx1">
                        <a href="/"><i className="icon icon-facebook"> </i></a>
                    </li>
                    <li className="mx1">
                        <a href="/"><i className="icon icon-twitter"> </i></a>
                    </li>
                    <li className="mx1">
                        <a href="/"><i className="icon icon-instagram"> </i></a>
                    </li>
                    <li className="mx1">
                        <a href="/"><i className="icon icon-dot-3"> </i></a>
                    </li>
                    <li className="mx4">
                        <a href="/">More Flux App <i className="icon icon-dropdown-down"> </i></a>
                    </li>
                </ul>
            </footer>
        )
    }
}

export default Footer;