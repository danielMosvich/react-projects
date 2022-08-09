import { config } from './config';

export const searchUsers = async (username) =>{
    try {
        const response = await fetch(`${config.base_url}/search/users?q=${username}`);

        const data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}

export const searchUser = async (username) =>{
    try {
        const response = await fetch(`${config.base_url}/users/${username}`);
        return response.json();
    } catch(error){
        console.log(error);
    }
}

export const getRepos = async (username) =>{
    try{
        const response = await fetch(`${config.base_url}/users/${username}/repos?sort=created`);
        
        const data = await response.json();
        return data;
    }catch(error){
        return error;
    }
    
}