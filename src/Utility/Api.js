import axios from "axios";

const fetchData = async (url) => {
    try{
        const response = await axios.get(url, {
            auth: {
                username: 'coalition',
                password: 'skills-test'
            }
        })
        return response
    }catch(error){
        console.log(error)
    }
}







export {fetchData}