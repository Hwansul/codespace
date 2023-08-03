describe('MyComponent', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it('should render correctly', () => {
    const component = renderer.create(<MyComponent>Hello World!</MyComponent>);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
