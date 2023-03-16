import React from 'react';
import { Route, Routes } from 'react-router-dom';

class AppRouter extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={''}></Route>
        <Route path="/about" element={''}></Route>
        <Route path="*" element={''}></Route>
      </Routes>
    );
  }
}

export default AppRouter;
