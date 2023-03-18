import React from 'react';
import { Route, Routes } from 'react-router-dom';
import * as Pages from '../pages';

class AppRouter extends React.Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Pages.MainPage title="Main Page" />}></Route>
        <Route path="/about" element={<Pages.AboutPage title="About Page" />}></Route>
        <Route path="*" element={<Pages.Page404 title="Not Found Page" />}></Route>
      </Routes>
    );
  }
}

export default AppRouter;
