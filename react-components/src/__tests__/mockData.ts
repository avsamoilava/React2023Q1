import configureStore from 'redux-mock-store';

export const mock = {
  info: {
    count: 826,
    pages: 42,
    next: 'https://rickandmortyapi.com/api/character/?page=2',
    prev: null,
  },
  results: [
    {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      type: 'Done',
      gender: 'Male',
      origin: {
        name: '',
        url: '',
      },
      location: {
        name: '',
        url: '',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      episode: ['', ''],
      url: '',
      created: '',
    },
  ],
};

export const fakeCharList = [
  {
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    episode: ['', ''],
    url: '',
    created: '',
  },
  {
    id: 2,
    name: 'Summer Sanchez',
    status: 'Dead',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    episode: ['', ''],
    url: '',
    created: '',
  },
];

export const fakeChar = {
  id: 2,
  name: 'Summer Sanchez',
  status: 'Dead',
  species: 'Human',
  type: 'Test is working',
  gender: 'Female',
  origin: {
    name: '',
    url: '',
  },
  location: {
    name: '',
    url: '',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  episode: ['', ''],
  url: '',
  created: '',
};

export const mockStore = configureStore();
export const initialState = {
  search: { value: '' },
  form: { cards: [], isSuccess: false },
  charApi: {},
};
