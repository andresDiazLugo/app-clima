import axios  from 'axios';


export async function useFetch(ciudad){
    const apiKEY = import.meta.env.VITE_APP_API_KEY
    try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKEY}&units=metric`);
        return [response.data]
    } catch (error) {
        console.log("salio mal", error)        
    }
}