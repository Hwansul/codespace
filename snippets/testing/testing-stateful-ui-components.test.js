context('the component is initialized in a collapsed state', function() {
  let wrapper;
  beforeEach(function(){
    wrapper = mount(<StatefulComponent />);
  });

  it('component state.expanded is false', function() {
    expect(wrapper.state('expanded')).to.be.false;
  });
});

context('the component is initialized in a collapsed state', function() {
  let wrapper;
  beforeEach(function(){
    wrapper = mount(<StatefulComponent />);
  });

  it('component does not have the expanded class', function() {
    expect(wrapper.find('div').hasClass('expanded')).to.be.false;
  });
});
