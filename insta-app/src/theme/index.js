import { createTheme } from "@mui/material";


// !de esta forma declaramos nuestra paleta de colores

const theme = createTheme({
    palette:{
        primary:{
            main:'#e1306c',
            contrastText:'#fff'
        }
    }
})

export default theme;