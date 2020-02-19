import React from 'react';
import './App.css';

const MyContext = React.createContext()

class MyProvider extends React.Component {
  state = { name: 'Wilfred', age: 27 }

  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        growAYearOlder: () => this.setState({ age: this.state.age + 1 })
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

function Person() {
  return (
    <div>
      <MyContext.Consumer>
        {(context) => (
          <>
            <p>I am {context.state.name}</p>
            <p>And I am {context.state.age}</p>
            <button onClick={context.growAYearOlder}>Increase age</button>
          </>
        )}
      </MyContext.Consumer>
    </div>
  )
}

function App(props) {
  return (
    <MyProvider>
      <div>
        <Person />
      </div>
    </MyProvider>
  );
}

export default App;
