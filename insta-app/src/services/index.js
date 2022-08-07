import { config } from './config';

export const searchUser = async (username) =>{
    try {
        const response = await fetch(`${config.base_url}/search?search=${username}`,{
            headers:{
                'X-RapidAPI-Key':config.key_api,
                'X-RapidAPI-Host':config.api_host
            }
        });
        const data = await response.json();
        return data;
    } catch(error){
        console.log(error);
    }
}