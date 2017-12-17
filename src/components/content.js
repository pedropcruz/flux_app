import React, {Component} from 'react';

export default class Content extends Component {
    render() {
        return (
            <section className="content-section p4 relative inline-block">
                <article className="left">
                    <h2 className="h2 subtitle p1 inline-block">The truth about</h2>
                    <h1 className="h1 title mt2 mb0">Human Interface Design</h1>
                    <a href="/" className="relative author inline-block">By Lynn Long</a>
                    <p className="date inline-block ml4 mt3">3 hours ago <a href="/" className="inline-block category">in
                        Design</a></p>
                    <div className="attention absolute">
                        Scroll it Dammit
                    </div>
                    <div className="nextArticle absolute flex mb4 items-center">
                        <a href="/" className="link inline-block"><i className="icon icon-down"> </i></a>
                        <div className="block">
                            <p className="pageNumber mt0">01 <span className="inline-block relative"> </span> 07</p>
                            <p className="m0">Make it Sexy</p>
                        </div>
                    </div>
                </article>
                <article className="right right-align">
                    <div className="social-links absolute block mt4 mr4">
                        <a className="inline-block mx1 share" href="/"> Share </a>
                        <a className="inline-block mx1" href="/"><i className="icon icon-facebook"> </i></a>
                        <a className="inline-block mx1" href="/"><i className="icon icon-twitter"> </i></a>
                        <a className="inline-block mx1" href="/"><i className="icon icon-dot-3"> </i></a>
                        <div className="social-links_counts block">
                            <p className="mx1 relative">Like<span className="inline-block relative"> </span>74</p>
                            <p className="mx1 relative">comment<span className="inline-block relative"> </span>26</p>
                        </div>
                    </div>
                    <p className="pageNumber mb3">01 <span className="inline-block relative"> </span> 07</p>
                    <h2 className="h2 subtitle p1 inline-block m0">Understanding user</h2><br/>
                    <h2 className="h2 subtitle p1 inline-block code-wrap">expectations</h2>
                    <p className="text justify mt3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum convallis enim, mattis
                        lobortis lectus suscipit eget. Proin at nibh non felis aliquam semper. Sed convallis convallis
                        ante. Curabitur a turpis tempus eros accumsan luctus nec vel lectus. Vestibulum non lacinia
                        risus, vestibulum rutrum eros. Duis rhoncus magna ac laoreet tempus. Sed vel posuere lectus.
                        Integer ut magna at massa dapibus dapibus at at lacus. Fusce elementum metus vulputate
                        sollicitudin elementum. Donec varius mauris quam, at congue ipsum semper at.
                        Vestibulum risus lorem, condimentum non odio in, consequat malesuada tortor. Donec faucibus
                        fermentum tellus, in blandit urna. Cras eget rhoncus sapien. Vestibulum rhoncus sapien vel
                        dictum semper. Quisque maximus elit non sollicitudin semper. Aliquam ac elit risus. Fusce
                        finibus dignissim mauris eu euismod. Mauris faucibus dui turpis, at vulputate ex dapibus nec.
                        Donec velit metus, sollicitudin at dolor in, pellentesque porttitor leo. Donec lobortis massa
                        massa, id finibus ipsum rutrum eget. Pellentesque in mi at elit convallis hendrerit. Nulla
                        egestas ipsum sit amet lorem tempus, eget lacinia neque aliquam. Curabitur eu mi ut dolor
                        tincidunt efficitur.
                    </p>
                </article>
            </section>
        )
    }
}