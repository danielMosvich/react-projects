import { useState, useEffect } from "react";
import { useParams, useNavigate} from "react-router-dom";
import { searchUsers } from "../../services";
import { CustomCard } from "../../components";
import {
    Box,
    Container,
    Typography,
} from "@mui/material";


const Users = () => {
    const {username} = useParams();
    const history = useNavigate();
    const [usersList, setUsersList] = useState([]);
    const fetchUsers = async () => {
        const data = await searchUsers(username);
        // console.log(data)
        setUsersList(data.items);
    }
    //!funcion que se pasa por props
    const handleClick = (username)=>{
        history(`/user/${username}`)
    }

    useEffect(() => {
        fetchUsers();
    },[])
    return(
        <Container maxWidth='md'>
            <Box>
                <Typography variant='h5' align='center' mt={5}>
                    Resultados de la busqueda: {username}
                </Typography>
            </Box>
            <Box>
                {
                    usersList.length > 0 && (
                        usersList.map((user, index) => (
                            <CustomCard 
                            key={index} 
                            user={user} 
                            handleClick={handleClick} 
                            />
                        ))
                    )
                    
                }
            </Box>
        </Container>
    )
}
export default Users;