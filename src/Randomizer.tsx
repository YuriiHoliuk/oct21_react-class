import { Component } from 'react';

function printRandom() {
  console.log('Random number: ', Math.random());
}

export class Randomizer extends Component {
  timerId?: ReturnType<typeof setInterval>;

  componentDidMount() {
    this.timerId = setInterval(printRandom, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <h2>Randomizer 🎲</h2>
    );
  }
}
