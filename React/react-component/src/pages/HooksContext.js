import React, { useContext } from 'react'
const Context = React.createContext();
const Provider = Context.Provider;

export default function HooksContext() {
  const store = {
    user: {
      name: "wx"
    }
  };

  return (
    <div>
      HooksContext
      <Provider value={store}>
        <ContextChild />
      </Provider>
    </div>
  )
}

function ContextChild() {
  console.log(useContext(Context));
  const { user } = useContext(Context);

  return <div>
    ContextChild
    <p>name: {user.name}</p>
  </div>
}