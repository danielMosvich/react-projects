import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {searchUser, getRepos} from "../../services"
import {Container,Grid,Button,Typography, Box, Card, CardContent} from "@mui/material"
import { TypographyIconBio } from "../../components"


const User = () => {
    const {username} = useParams();
    const [repos, setRepos] = useState([]);
    const [userDetail, setUserDetail] = useState(null)
    const fetchUser = async () => {
        const data = await searchUser(username)
        setUserDetail(data)
    }
    const fetchRepos = async () => {
        const data = await getRepos(username)
        setRepos(data)
    }
    useEffect(() => {
        fetchUser()
    },[])
    useEffect(() => {
        fetchRepos()
    },[])
    return (
        <Container>
            {userDetail && (
                <Box mt={10}>
                    <Grid container spacing={3} >
                        {/* //!quechar esto para cambiar el tamanio */}
                        <Grid item xs={12} md={4}>
                            <Box mb={1}>
                                <img 
                                style={{
                                    borderRadius: '100%',
                                }} 
                                src={userDetail.avatar_url} 
                                alt={userDetail.login}
                                width={200}
                                />
                            </Box>
                                <Typography mb={1} variant="h6">
                                    {userDetail.name}
                                </Typography>
                                <Typography 
                                mb={1} 
                                variant="h6" 
                                fontWeight={350}
                                color='#bbbbbb'
                                >
                                    {userDetail.login}
                                </Typography>
                                <Typography mb={1} variant="body1">
                                    {userDetail.bio}
                                </Typography>

                                <Button variant='contained' fullWidth>Edit profile</Button>
                                <TypographyIconBio
                                icon='people'
                                text={`${userDetail.followers} followers . ${userDetail.following} following`}
                                ></TypographyIconBio>

                                {userDetail.company && (
                                    <TypographyIconBio
                                    icon='company'
                                    text={`${userDetail.company}`}
                                    ></TypographyIconBio>
                                )}
                                {userDetail.email && (
                                    <TypographyIconBio
                                    icon='email'
                                    text={`${userDetail.email}`}
                                    ></TypographyIconBio>
                                )}
                                {userDetail.blog && (
                                    <TypographyIconBio
                                    icon='blog'
                                    text={`${userDetail.blog}`}
                                    ></TypographyIconBio>
                                )}
                                {userDetail.location && (
                                    <TypographyIconBio
                                    icon='location'
                                    text={`${userDetail.location}`}
                                    ></TypographyIconBio>
                                )}
                                {userDetail.twitter_username && (
                                    <TypographyIconBio
                                    icon='twitter'
                                    text={`@${userDetail.twitter_username}`}
                                    ></TypographyIconBio>
                                )}
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography variant="h5">
                                Reposities
                            </Typography>
                            <Box>
                                {repos.length > 0 && (
                                    repos.map((repo, index) =>(
                                        <Box key={index} mt={3}>
                                            <Card>
                                                <CardContent>
                                                    <Typography 
                                                    variant="h6"
                                                    fontWeight={800}
                                                    >
                                                        {repo.name}
                                                    </Typography>
                                                    <Typography 
                                                    variant="body1"
                                                    >
                                                        {repo.language}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    ))
                                )
                                }
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            )}
        </Container>
    )
}

export default User;