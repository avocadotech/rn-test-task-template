import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import {
  Text,
  View,
} from 'react-native';

import { QueryClient, QueryClientProvider } from 'react-query';
import { configureStore } from './store/configure-store';
import { RNPaperTheme } from './constants';

const queryClient = new QueryClient();
export const { store, persistor } = configureStore();

export const App = () => (
  <NavigationContainer>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PaperProvider theme={RNPaperTheme}>
          <PersistGate loading={null} persistor={persistor}>
            <View>
              <Text>Initial</Text>
            </View>
          </PersistGate>
        </PaperProvider>
      </Provider>
    </QueryClientProvider>
  </NavigationContainer>

);
