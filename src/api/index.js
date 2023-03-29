import axios from "axios";

const getProducts = async() =>{
    const response = await axios.get("/data/data.json");
    return response.data;
}

export default {
    getProducts
}   