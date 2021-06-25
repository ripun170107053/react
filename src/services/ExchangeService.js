import axios from 'axios';
//import authHeader from "./auth-header";

const EXCHANGE_API_BASE_URL = "https://glacial-brook-60163.herokuapp.com/stockExchange/";

class ExchangeService {

    getExchanges(){
        return axios.get(EXCHANGE_API_BASE_URL);
    }

    createExchange(exchange){
        return axios.post(EXCHANGE_API_BASE_URL+'add', exchange);
    }

    getExchangeById(exchangeId){
        return axios.get(EXCHANGE_API_BASE_URL +'findId/'+ exchangeId);
    }

    updateExchange(exchange){
        return axios.put(EXCHANGE_API_BASE_URL + 'update', exchange);
    }

    deleteExchange(exchangeId){
        return axios.delete(EXCHANGE_API_BASE_URL + 'delete/'+exchangeId);
    }
}

export default new ExchangeService()