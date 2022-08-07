import { useState } from 'react'
import {Link} from 'react-router-dom'
import {Button, Container, Grid, TextField} from '@mui/material'
// import {searchUser} from '../../services'
const Search = () => {
    const [username, setUsername] = useState('')
    
    // !cuando se haga un cambio en el input se ejecuta la funcion
    const handleInputChange = (e) => {
        setUsername(e.target.value)
    }
    // const fetchSearchUser = async () => {
    //     const data = await searchUser(username)
    //     console.log(data)
    // }
    return(
        <Container maxWidth='sm'>
            <Grid 
            container
            spacing={3}
            direction='row'
            justifyContent='center'
            alignContent='center'
            sx={{
                height:'100vh',
            }}
            >
                <Grid item xs={12}>
                    <TextField  
                    label={'Buscar usuario'} 
                    value={username} 
                    onChange={handleInputChange}
                    fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <Link to={`/user/${username}`} style={{
                        textDecoration:'none',
                    }}>
                        <Button
                        // onClick={fetchSearchUser} 
                        variant='contained' 
                        fullWidth
                        >Buscar</Button>
                    </Link>
                    
                </Grid>
            </Grid>
        </Container>
    )
}
export default Search;