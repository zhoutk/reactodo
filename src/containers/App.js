import React, { Component } from 'react';
import {HeaderUl, HeaderLi, HeaderA} from '../styled/Header';
import {ContentDiv} from '../styled/Content';

class App extends Component {
    render() {
        const activeStyle = {backgroundColor: "#0099FF"};
        return (
            <div>
                <h1>Simple SPA</h1>
                <HeaderUl className="header">
                    <HeaderLi><HeaderA exact to="/" activeStyle={activeStyle}>Home</HeaderA></HeaderLi>
                    <HeaderLi><HeaderA to="/stuff" activeStyle={activeStyle}>Stuff</HeaderA></HeaderLi>
                    <HeaderLi><HeaderA to="/contact" activeStyle={activeStyle}>Contact</HeaderA></HeaderLi>
                </HeaderUl>
                <ContentDiv>
                    {this.props.children}
                </ContentDiv>
            </div>
        );
    }
}

export default App;
