import {ThemeProvider} from '@mui/material'
import theme from './theme'
import Router from './router';
// import Search from './pages/Search'
// ? importamos la paleta desde la carpeta theme, ademas agregamos el contenedor ThemeProvider

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
    // <div>
    //   <Search />
    // </div>
  );
}

export default App;
