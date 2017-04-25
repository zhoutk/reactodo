import React, { Component } from 'react';
import {HeaderUl, HeaderLi, HeaderA} from '../styled/Header';
import {ContentDiv} from '../styled/Content';

class App extends Component {
  render() {
    return (
        <div>
            <h1>Simple SPA</h1>
            <HeaderUl className="header">
                <HeaderLi><HeaderA exact to="/" activeClassName="active">Home</HeaderA></HeaderLi>
                <HeaderLi><HeaderA to="/stuff" activeClassName="active">Stuff</HeaderA></HeaderLi>
                <HeaderLi><HeaderA to="/contact" activeClassName="active">Contact</HeaderA></HeaderLi>
            </HeaderUl>
            <ContentDiv>
                {this.props.children}
            </ContentDiv>
        </div>
    );
  }
}

export default App;
