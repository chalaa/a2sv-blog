'use client';

import { Provider } from 'react-redux';
import { makeStore } from '../Services/store';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const store = makeStore();

const ReduxProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
