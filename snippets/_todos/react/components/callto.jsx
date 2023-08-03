const Callto = ({ phone, children }) => {
  return <a href={`tel:${phone}`}>{children}</a>;
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Callto phone="+302101234567">Call me!</Callto>
);
