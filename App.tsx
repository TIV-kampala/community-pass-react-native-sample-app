import React from 'react';
import RouterRoot from 'react-native-auto-route';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'orange',
  },
};




function App(): React.JSX.Element {
  return <PaperProvider theme={theme}>
    <RouterRoot />
  </PaperProvider>;

}

export default App;
