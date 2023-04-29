import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';
import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';

export const render = (url: string, opts: RenderToPipeableStreamOptions) => {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <Provider store={store} serverState={store.getState()}>
        <App />
      </Provider>
    </StaticRouter>,
    opts
  );
  return stream;
};
