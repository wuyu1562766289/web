import React from 'react';

const Context = React.createContext();
export const Provider = Context.Provider;
export const Consumer = Context.Consumer;

// 高阶组件
export const consumerHandle = Cmp => props => {
  return (
    <Consumer>
      {
        ctx => <Cmp {...props} {...ctx} />
      }
    </Consumer>
  )
}