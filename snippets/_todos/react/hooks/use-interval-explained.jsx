React.useEffect(() => {
  let id = setInterval(callback, delay);
  return () => clearInterval(id);
}, []);

const savedCallback = React.useRef(callback);

React.useEffect(() => {
  let id = setInterval(savedCallback.current, delay);
  return () => clearInterval(id);
}, []);

const savedCallback = React.useRef(callback);

React.useEffect(() => {
  function tick() {
    savedCallback.current();
  }
  let id = setInterval(tick, delay);
  return () => clearInterval(id);
}, []);

const useInterval = callback => {
  const savedCallback = React.useRef();

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, []);
};
