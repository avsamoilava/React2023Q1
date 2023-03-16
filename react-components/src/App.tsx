import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';
import './App.scss';
import { Layout } from './components/layout/Layout';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <AppRouter />
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
