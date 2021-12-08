import { Component, ComponentType, FC } from 'react';
import { Randomizer } from './Randomizer';
import './App.scss';

interface State {
  page: 'home' | 'random';
}

const Home: FC = () => (
  <h2>Home page 🏡</h2>
);

export class App extends Component<{}, State> {
  state: State = {
    page: 'random',
  };

  goRandom = () => {
    this.setState({ page: 'random' });
  };

  goHome = () => {
    this.setState({ page: 'home' });
  };

  render() {
    const { page } = this.state;

    let Page: ComponentType;

    switch (page) {
      case 'home': {
        Page = Home;
        break;
      }

      case 'random': {
        Page = Randomizer;

        break;
      }

      default: {
        throw new Error(`Unsupported page ${page}`);
      }
    }

    return (
      <div className="App">
        <h1 className="headline">Powered by class Components 🚀🚀🚀</h1>
        <button
          type="button"
          onClick={this.goHome}
        >
          🏡
        </button>
        <button
          type="button"
          onClick={this.goRandom}
        >
          🎲
        </button>
        <Page />
      </div>
    );
  }
}
