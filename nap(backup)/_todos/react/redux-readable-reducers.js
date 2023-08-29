const initialState = {
  id: null,
  name: '',
  properties: {},
};

const generateID = () => Math.floor(Math.random() * 1000);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'createID':
      return {
        ...state,
        id: generateID(),
      };
    case 'setName':
      return {
        ...state,
        name: action.name,
      };
    case 'addProperty':
      return {
        ...state,
        properties: {
          ...state.properties,
          [action.propertyName]: action.propertyValue,
        },
      };
    case 'removeProperty':
      return {
        ...state,
        properties: Object.keys(state.properties).reduce((acc, key) => {
          if (key !== action.propertyName) acc[key] = state.properties[key];
          return acc;
        }, {}),
      };
    default:
      return state;
  }
};



const ACTION_TYPES = {
  CREATE_ID: 'createID',
  SET_NAME: 'setName',
  ADD_PROPERTY: 'addProperty',
  REMOVE_PROPERTY: 'removeProperty'
};

// Structure of any action passed to our reducer function
const action = {
  // Any of the previously defined action types
  type: ACTION_TYPES.CREATE_ID,
  // Nest name, propertyValue and propertyKey inside this object
  payload: { /* ... */ }
}

const createID = state => ({
  ...state,
  id: generateID(),
});

const setName = (state, { name }) => ({
  ...state,
  name,
});

const addProperty = (state, { propertyName, propertyValue }) => ({
  ...state,
  [propertyName]: propertyValue,
});

const removeProperty = (state, { propertyName }) => {
  const properties = Object.keys(state.properties).reduce((acc, key) => {
    if (key !== propertyName) acc[key] = state.properties[key];
    return acc;
  }, {});
  return { ...state, properties };
};

const initialState = {
  id: null,
  name: '',
  properties: {},
};

const ACTION_TYPES = {
  CREATE_ID: 'createID',
  SET_NAME: 'setName',
  ADD_PROPERTY: 'addProperty',
  REMOVE_PROPERTY: 'removeProperty'
};

const generateID = () => Math.floor(Math.random() * 1000);

const createID = state => ({
  ...state,
  id: generateID(),
});

const setName = (state, { name }) => ({
  ...state,
  name,
});

const addProperty = (state, { propertyName, propertyValue }) => ({
  ...state,
  [propertyName]: propertyValue,
});

const removeProperty = (state, { propertyName }) => {
  const properties = Object.keys(state.properties).reduce((acc, key) => {
    if (key !== propertyName) acc[key] = state.properties[key];
    return acc;
  }, {});
  return { ...state, properties };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_ID:
      return createId(state, action.payload);
    case TYPES.SET_NAME:
      return setName(state, action.payload);
    case TYPES.ADD_PROPERTY:
      return addProperty(state, action.payload);
    case TYPES.REMOVE_PROPERTY:
      return removeProperty(state, action.payload);
    default:
      return state;
  }
};
