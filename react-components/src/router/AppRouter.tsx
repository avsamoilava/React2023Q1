import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Pages from '../pages';

class AppRouter extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Pages.MainPage />}></Route>
        <Route path="/about" element={<Pages.AboutPage />}></Route>
        <Route path="*" element={<Pages.Page404 />}></Route>
      </Routes>
    );
  }
}

export default AppRouter;
