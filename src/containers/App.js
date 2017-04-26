import React, { Component } from 'react';
import InputAndButton from '../components/InputAndButton';
import LiList from '../components/LiList';

class App extends Component {
    constructor(props)	{
        super(props);
        this.state={items:[]};
    }
    componentDidMount(){
        this.setState({items:[{key:'123',text:'text 1'},{key:'231',text:'text 2'}]})
    };
    render() {
        return (
            <div>
                <InputAndButton/>
                <LiList items={this.state.items}/>
            </div>
        );
    };
}

export default App;
