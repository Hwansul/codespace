// src/test/utils/renderConnected.js
import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Replace this with the appropriate imports for your project
import { reducer, reducerInitialState } from './myReduxStore';

const renderConnected = (
  ui, {
    initialState = reducerInitialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions});
};

export default renderConnected;

// src/test/SomeComponent.test.jsx
import React from 'react';
// Replace this with the appropriate location of your component
import SomeComponent from 'src/components/SomeComponent';
// Replace this with the appropriate location of your testing utility
import renderConnected from 'src/test/utils/renderConnected';

describe('<SomeComponent/>', () => {
  let wrapper, getByText;
  const initialState = {
    // ... Add your initial testing state here
  };

  beforeEach(() => {
    const utils = renderConnected(<SomeComponent />, { initialState });
    wrapper = utils.container;
    getByText = utils.getByText;
  });

  it('renders the component', () => {
    expect(wrapper.querySelector('.some-component')).toBeInTheDocument();
  });
});
