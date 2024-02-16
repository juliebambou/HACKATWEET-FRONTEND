import '../styles/globals.css';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import user from '../reducers/user';
import like from '../reducers/like';
import storage from 'redux-persist/lib/storage';

const persistConfig = { key: 'Hackatweet', storage };

const reducers = combineReducers({ user, like });

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor}>
      <Head>
        <title>Hackatweet</title>
      </Head>
      <Component {...pageProps} />
      </PersistGate>
    </Provider>

  );
}

export default App;
