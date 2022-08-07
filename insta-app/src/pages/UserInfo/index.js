import { useState, useEffect } from 'react';
import {Container, Grid, Typography, Box,Card,CardContent} from '@mui/material'
import {useParams} from 'react-router-dom';
import {searchUser} from '../../services'
//! useParams captura los parametros de la url

const UserInfo = ()=>{

    const [userData, setUserData] = useState(null)

    const fetchUserData = async () => {
        const {body} = await searchUser(username)
        setUserData(body.users)
    }


    const {username} = useParams();
    // console.log(userData)

    // userData.forEach(user => {
    //     console.log(user.user.full_name)
    // })
    useEffect(()=>{
        fetchUserData();
    },[])


    return(
        <Container maxWidth='md'>
            <Box mt={10}>
                <Typography variant='h4'>Resultados de busqueda de {username}</Typography>
            </Box>
            <Box>
                {
                userData && (
                    userData.map(us => (
                        <Box mt={3}>
                            <Card>
                                <CardContent>
                                    <Grid item>
                                        {/* <Avatar
                                        crossOrigin='anonymous'
                                        src={us.user.profile_pic_url} /> */}
                                        <img 
                                        crossOrigin='anonymous'
                                        src={us.user.profile_pic_url} 
                                        alt="" style={{
                                            borderRadius:'50%',
                                            height:'100px',
                                        }} />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='h5'>@{us.user.username}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant='h6'>{us.user.full_name}</Typography>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Box>
                    ))
                )
                }
            </Box>
            
        </Container>
    )
}

export default UserInfo;