import axios from 'axios';
//import authHeader from "./auth-header";

const SECTOR_API_BASE_URL = "https://glacial-brook-60163.herokuapp.com/sector/";

class SectorService {

    getSectors(){
        return axios.get(SECTOR_API_BASE_URL+'sectors');
    }

    createSector(sector){
        return axios.post(SECTOR_API_BASE_URL+'add', sector);
    }

    getSectorById(sectorId){
        return axios.get(SECTOR_API_BASE_URL + sectorId);
    }

    updateSector(sector){
        return axios.put(SECTOR_API_BASE_URL + 'update', sector);
    }

    deleteSector(sectorId){
        return axios.delete(SECTOR_API_BASE_URL + sectorId);
    }
}

export default new SectorService()