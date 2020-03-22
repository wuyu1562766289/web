import React from 'react';
import Home from './pages/Home';
import { Provider, Comsumer } from './AppContext';
import User from './pages/User';
// const Context = React.createContext();
// const Provider = Context.Provider;
// const Comsumer = Context.Consumer;

const Context = React.createContext();
const ProviderTem = Context.Provider;
const ComsumerTem = Context.Consumer;

const store = {
  home: {},
  user: {
    name: 'wx',
  },
};
const temp = { name: "另一个值" };

function App() {
  return (
    <div className="App">
      <Provider value={store}>
        {/* <Comsumer>
          {ctx => <Home {...ctx} />}
        </Comsumer> */}
        <Home />
      </Provider>
      <ProviderTem value={temp}>
        <Home />
      </ProviderTem>
      <Provider value={store}>
        <Comsumer>
          {ctx => <User {...ctx} />}
        </Comsumer>
      </Provider>
    </div>
  );
}

export default App;
