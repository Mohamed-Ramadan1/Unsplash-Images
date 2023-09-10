import axios from "axios";

const customeFeatch = axios.create({
  baseURL: `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_API_KEY
  }&query=`,
});

export default customeFeatch;
