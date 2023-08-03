const MyComponent = ({ enabled }) => {
  return ( <div className={enabled ? 'enabled' : ''}> Hi </div> );
};

const OtherComponent = ({ enabled }) => {
  return ( <div className={enabled ? 'enabled' : null}> Hi </div> );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <MyComponent enabled={false} />
    <OtherComponent enabled={false} />
  </>
);
