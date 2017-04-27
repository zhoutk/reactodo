import React, { Component } from 'react';
import InputAndButton from '../components/InputAndButton';
import LiList from '../components/LiList';

class App extends Component {
    constructor(props)	{
        super(props);
        this.state={
            items:[],
            inputValue:''
        };
    }
    onChange(e){
        this.setState({
            inputValue:e.target.value
        })
    }
    addItem(e){
        if(e.keyCode === 13 || e.type === 'click'){
            if(this.state.inputValue.length > 0) {
                this.state.items.push({key: new Date().getTime(), text: this.state.inputValue});
                e.target.value = '';
                this.setState({
                    items: this.state.items,
                    inputValue:''
                })
            }
            this.InputComponent.focus();
        }
    }
    componentDidMount(){
        this.InputComponent.focus();
    }
    render() {
        return (
            <div>
                <InputAndButton ref={comp => { this.InputComponent = comp; }} onChange={this.onChange.bind(this)} addItem={this.addItem.bind(this)} inputValue={this.state.inputValue}/>
                <LiList items={this.state.items}/>
            </div>
        );
    };
}

export default App;
