import React, { Component } from 'react';
import Navigation from './components/navigation';
import Content from './components/content';
import Footer from './components/footer'


class App extends Component {
  render() {
    return (
        <section>
            <Navigation />
            <Content />
            <Footer />
        </section>
    );
  }
}

export default App;
