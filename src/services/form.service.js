// import * as CONFIG from '@/config';
import axios from 'axios';

// axios.defaults.baseURL = CONFIG.API_DOMAIN_NAME;
axios.defaults.headers.common = { 'X-Requested-With': 'XMLHttpRequest'};

const mapService = {
    all () {},
    create () {},
    show(uuid) {
        return new Promise((resolve, reject)=>{
            axios.get("http://0.0.0.0:8001/maps").then(response =>{
                resolve(response.data);
            }).catch((error)=>{
                reject(error);
            });
        });

        //api/v1/forms/{form}/collections
    },
    update () {},
    delete () {},
};

export default mapService;
