import React from 'react';
import { StatusBar } from 'react-native';

import './config/ReacotronConfig';

import Routes from './routes';

export default function src() {
  return <>
  <StatusBar barStyle="light-conttent" backgroundColor="#7159c1" />
  <Routes />
  </>
}
