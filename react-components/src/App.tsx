import React from 'react';
import AppRouter from './router/AppRouter';
import { Layout } from './components/layout/Layout';

class App extends React.Component {
  render() {
    return (
      <Layout>
        <AppRouter />
      </Layout>
    );
  }
}

export default App;
