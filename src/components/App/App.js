import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import SideBar from '../SideBar';
import Content from '../Content';

const blocks = [
  {
    name: 'BLOCK 1',
    color: '#E87481'
  },
  {
    name: 'BLOCK 2',
    color: '#b46d84'
  },
  {
    name: 'BLOCK 3',
    color: '#6a5c7a'
  },
  {
    name: 'BLOCK 4',
    color: '#3d5d7c'
  }
]

class App extends Component {
  state = {
    isHiddenSideBar: false,
    activeBlock: null,
  }
  toggleSideBar = () => {
    this.setState({isHiddenSideBar: !this.state.isHiddenSideBar})
  }
  toggleBlockClick = (e) => {
    this.setState({activeBlock: e === this.state.activeBlock ? null : e})
  }

  render () {
    return (
        <div className="app">
          <Header />
          <SideBar isHidden={this.state.isHiddenSideBar}/>
          <Content
              blocks={blocks}
              activeBlock={this.state.activeBlock}
              toggleSideBar={this.toggleSideBar}
              toggleBlockClick={this.toggleBlockClick}
              isHiddenSideBar={this.state.isHiddenSideBar}/>
        </div>
    );
  }
}

export default App;
