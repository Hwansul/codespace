const useOnWindowResize = callback => {
  const listener = React.useRef(null);

  React.useEffect(() => {
    if (listener.current)
      window.removeEventListener('resize', listener.current);
    listener.current = window.addEventListener('resize', callback);
    return () => {
      window.removeEventListener('resize', listener.current);
    };
  }, [callback]);
};

const App = () => {
  useOnWindowResize(() =>
    console.log(`window size: (${window.innerWidth}, ${window.innerHeight})`)
  );
  return <p>Resize the window and check the console</p>;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
