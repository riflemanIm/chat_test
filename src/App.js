import React from 'react';
import ThemeProvider from 'mui-themes-extand';
import Chat from './components/Chat';

function App() {
  return (
    <ThemeProvider name="mobimed">
      <Chat />
    </ThemeProvider>
  );
}

export default App;
