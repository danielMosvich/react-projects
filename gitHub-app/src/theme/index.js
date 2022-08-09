import { createTheme } from "@mui/material";


// !de esta forma declaramos nuestra paleta de colores

const theme = createTheme({
    palette:{
        primary:{
            main:'#171515',
            contrastText:'#fff'
        }
    }
})

export default theme;