import axios from "axios";

const customeFeatch = axios.create({
  baseURL:
    "https://api.unsplash.com/search/photos?client_id=L-2eo4UWu4nzwGYq6Zhi0xsOlzoD9Os8Ajz8HqlBOiQ&query=",
});

export default customeFeatch;
