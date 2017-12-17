import React, {Component} from 'react';
import Logo from './logo';

const min = 1,
    max = 100;

const pages = [
    "Design",
    "Tech",
    "Business",
    "Culture",
    "People"
];


class Navigation extends Component {
    constructor(props) {
        super(props);
        this.getRandomNumber = this.getRandomNumber.bind(this);
    }

    getRandomNumber() {
        return (
            <span className="block pt1"> { Math.round(Math.random() * (max - min) + min) } </span>
        )
    }

    render() {
        return (
            <nav className="navigation relative">
                <Logo/>
                <ul className="list-reset p3 mb0">
                    {pages.map((val) => {
                        return (
                            <li key={"feature_" + val} >
                                <a href={'/' + val} className="block pt2 mb3">{val}
                                    {this.getRandomNumber()}
                                </a>
                            </li>
                        )
                    })}
                </ul>
                <a className="search center block relative mt1" href="/">
                    <i className="icon icon-search"> </i>
                </a>
                <p className="center mt2 mb0">Search</p>
            </nav>
        )
    }
}

export default Navigation;