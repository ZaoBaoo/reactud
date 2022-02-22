import React, { Component } from 'react';

// levle 2
// Здесь собираются все модули
// После этого экспортируется в самый главный index
class App extends Component {
  state = {
    count: 0,
    btnStart: true,
    btnStop: false,
    countInterval: null
  };

  // function btn start
  start = () => {
    this.setState({btnStart: false, btnStop: true})
    // start taimer
    let countInterval = setInterval(() => {
      this.setState({count: +this.state.count + 1})
    },1000);
    this.setState({countInterval: countInterval})
  }

  // function btn stop
  stop = () => {
    this.setState({btnStart: true, btnStop: false});
    clearInterval(this.state.countInterval);
  }

  // function btn reset
  reset = () => {
    this.setState({count: 0});
    this.setState({btnStart: true, btnStop: false});
    clearInterval(this.state.countInterval);
  }


  componentDidMount() {
    const countLocalStorage = localStorage.getItem('count');
    if(countLocalStorage){
      this.setState({count: countLocalStorage})
    }   
  }

  componentDidUpdate() {
    localStorage.setItem('count', this.state.count)
  }

  componentWillUnmount() {
    console.log('DOM');
  }



  render() {
    console.log();
    return (
      <div className="App">
        <h1 className='text'>React Таймер</h1>
        <span className="text big-size">{this.state.count}</span>
        <div className='center'>

        {/* btn start */}
          <button
          onClick={this.start}
          style={
            {display: this.state.btnStart ? 'inline-block' : 'none'}
          }
          className='btn big-size'>
          Start
          </button>

        {/* btn stop */}
          <button
          onClick={this.stop}
          style={
            {display: this.state.btnStop ? 'inline-block' : 'none'}
          }
          className='btn big-size'>
          Stop
          </button>

        {/* Btn reset */}
          <button
          onClick={this.reset}
          className='btn big-size'>
          Reset
          </button>

        </div>
      </div>
    );
  }
}

export default App;
