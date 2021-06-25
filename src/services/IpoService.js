import axios from 'axios';
//import authHeader from "./auth-header";

const IPO_API_BASE_URL = "https://glacial-brook-60163.herokuapp.com/IPO/";

class IpoService {

    getIpos(){
        return axios.get(IPO_API_BASE_URL+'allIPO');
    }

    createIpo(ipo){
        return axios.post(IPO_API_BASE_URL+'addIPO', ipo);
    }

    getIpoById(ipoId){
        return axios.get(IPO_API_BASE_URL + ipoId);
    }

    updateIpo(ipo, ipoId){
        return axios.put(IPO_API_BASE_URL + ipoId, ipo);
    }

    deleteIpo(ipoId){
        return axios.delete(IPO_API_BASE_URL + ipoId);
    }
}

export default new IpoService()