import React from 'react';
import { useDrag } from 'react-dnd';

const Card = ({
  card: {
    id,
    title
  }
}) => {
  const [style, drag] = useDrag({
    item: { id, type: 'card' },
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0 : 1
    })
  });

  return (
    <li className="card" id={id} ref={drag} style={style}>
      {title}
    </li>
  );
};

import React from 'react';
import { fireEvent } from '@testing-library/react';
import Card from './components/Card';
// This a little helper we have written to connect to redux and react-dnd
import renderDndConnected from './test_utils/renderDndConnected';

describe('<Card/>', () => {
  let card;

  beforeEach(() => {
    const utils = renderDndConnected(
      <Card card={{ id: '1', title: 'Card' }} />
    );
    card = utils.container.querySelector('.card');
  });

  it('initial opacity is 1', () => {
    expect(card.style.opacity).toEqual('1');
  });

  describe('when drag starts', () => {
    beforeEach(() => {
      fireEvent.dragStart(card);
    });

    it('opacity is 0', () => {
      expect(card.style.opacity).toEqual('0');
    });
  });
});

import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
// This a little helper we have written to connect to redux and react-dnd
import renderDndConnected from './test_utils/renderDndConnected';
import Card from './components/Card';

describe('<Card/>', () => {
  let card;

  beforeEach(() => {
    const utils = renderDndConnected(
      <Card card={{ id: '1', title: 'Card' }} />
    );
    card = utils.container.querySelector('.card');
  });

  it('initial opacity is 1', () => {
    expect(card.style.opacity).toEqual('1');
  });

  describe('when drag starts', () => {
    beforeEach(() => {
      fireEvent.dragStart(card);
    });

    it('opacity is 0', async() => {
      await waitFor(() => expect(card.style.opacity).toEqual('0'));
    });
  });
});
