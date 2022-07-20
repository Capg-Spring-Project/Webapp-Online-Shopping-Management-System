import axios from "axios";

const MEDICINE_API_BASE_URL = "http://localhost:4040/medicine"
const key = '';


// let webApiUrl = 'example.com/getStuff';
// let tokenStr = 'xxyyzz';
// axios.get(webApiUrl, { headers: {"Authorization" : `Bearer ${tokenStr}`} });

class CommonService {
    getAllMedicines() {
        let requestConfig = {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lckBlbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaXNVc2VyIjp0cnVlLCJleHAiOjE2NTgyNjQ3MDEsImlhdCI6MTY1ODIyODcwMX0.u69sTiMfb7fT84emNR_KO1V8paI5vctjkpLrLUg1smw"
            }
        }
        // return axios.get(MEDICINE_API_BASE_URL, { headers: { "Authorization": `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lckBlbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaXNVc2VyIjp0cnVlLCJleHAiOjE2NTgyNjQ3MDEsImlhdCI6MTY1ODIyODcwMX0.u69sTiMfb7fT84emNR_KO1V8paI5vctjkpLrLUg1smw` } });
        return axios.get(MEDICINE_API_BASE_URL, requestConfig);

        // console.log(message);
        // axios.get("http://localhost:8080/hello", { headers: { "Authorization": `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjdXN0b21lckBlbWFpbC5jb20iLCJpc0FkbWluIjpmYWxzZSwiaXNVc2VyIjp0cnVlLCJleHAiOjE2NTgyNjQ3MDEsImlhdCI6MTY1ODIyODcwMX0.u69sTiMfb7fT84emNR_KO1V8paI5vctjkpLrLUg1smw` } })
        //     .then(res => {
        //         console.log(res.data);        
        //     })
        // }
    }
}

export default new CommonService();