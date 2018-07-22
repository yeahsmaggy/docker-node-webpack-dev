// import * as CONFIG from '@/config';
import axios from 'axios';

// axios.defaults.baseURL = CONFIG.API_DOMAIN_NAME;
axios.defaults.headers.common = { 'X-Requested-With': 'XMLHttpRequest'};

const apiService = {
    all () {},
    create () {},
    show(id) {
        return new Promise((resolve, reject)=>{
            axios.get("http://localhost:8001/" + id).then(response =>{
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

export default apiService;
