import axios from 'axios';
import authHeader from "./auth-header";

const STOCK_API_BASE_URL = "https://glacial-brook-60163.herokuapp.com/stockPrice/";

class StockService {

    getStocks(){
        return axios.get(STOCK_API_BASE_URL+'all');
    }

    createStock(stock){
        return axios.post(STOCK_API_BASE_URL+'add', stock);
    }

    getStockById(stockId){
        return axios.get(STOCK_API_BASE_URL + 'findById/' + stockId);
    }

    updateStock(stock){
        return axios.put(STOCK_API_BASE_URL + 'update', stock);
    }

    deleteStock(stockId){
        return axios.delete(STOCK_API_BASE_URL + stockId);
    }
}

export default new StockService()