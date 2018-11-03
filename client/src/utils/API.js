import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
const APIKEY = "ffbd313c21bd481c992f57deb9173e1b";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + "&api-key=" + APIKEY);
  }
  
};