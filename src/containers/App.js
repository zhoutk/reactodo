import React, { Component } from 'react';
import InputAndButton from '../components/InputAndButton';
import LiList from '../components/LiList';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[]
        };
    }
    handleSave(text){
        if(text.length !== 0){
            this.state.items.push({key: new Date().getTime(), text});
            this.setState({
                items: this.state.items,
            })
        }
    };
    componentDidMount (){
        this.InputComponent.focus();
    };
    render() {
        return (
            <div>
                <InputAndButton ref={comp => { this.InputComponent = comp; }} onSave={this.handleSave.bind(this)}/>
                <LiList items={this.state.items}/>
            </div>
        );
    };
}

export default App;
