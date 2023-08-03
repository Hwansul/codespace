const destroyElement = () =>
  document.getElementById('app').removeChild(document.getElementById('my-div'));

const App = () => {
  const [elementShown, updateElement] = React.useState(true);

  return (
    <div id='app'>
      <button onClick={() => destroyElement()}>
        Delete element via querySelector
      </button>
      <button onClick={() => updateElement(!elementShown)}>
        Update element and state
      </button>
    { elementShown ? <div id="my-div">I am the element</div> : null }
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);


