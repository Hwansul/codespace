const root = document.body;

const newElement = document.createElement('div');
newElement.textContent = 'Hello World';

root.append(newElement);

const root = document.body;

const createElement = (el, parent, prepend = false) => {
  const { nodeName = 'div', ...attrs } = el;
  const element = document.createElement(nodeName);
  Object.entries(attrs).forEach(([attr, value]) => {
    element[attr] = value;
  });
  if (prepend) parent.prepend(element);
  else parent.append(element);
};

createElement(
  {
    nodeName: 'div',
    textContent: 'Hello world',
  },
  root
);

createElement(
  {
    nodeName: 'p',
    textContent: 'Hi',
  },
  root,
  true
);
