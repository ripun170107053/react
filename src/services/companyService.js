import axios from 'axios';
//import authHeader from "./auth-header";

const COMPANY_API_BASE_URL = "https://glacial-brook-60163.herokuapp.com/companies/";

class companyService {

    getCompanies(){
        return axios.get(COMPANY_API_BASE_URL);
    }

    createCompany(company){
        return axios.post(COMPANY_API_BASE_URL+'add', company);
    }

    getCompanyById(companyId){
        return axios.get(COMPANY_API_BASE_URL + 'findById/'+companyId);
    }

    updateCompany(company){
        return axios.put(COMPANY_API_BASE_URL + 'update', company);
    }

    deleteCompany(companyId){
        return axios.delete(COMPANY_API_BASE_URL +'delete/' +companyId );
    }
}

export default new companyService()