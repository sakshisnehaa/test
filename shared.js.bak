import { sleep, check } from "k6";
import http from "k6/http";

export const options = {
    scenarios: {
        
         shared_scenario: {
            executor: "shared-iterations", // (5/5)=1 iteration per vu, totally 5 iterations
             vus: 5,	// number of VUs to run concurrently
             iterations: 5,	// total number of script iterations to execute across all VUs.
             startTime: '0s'	//Starting time 
         },
    },
};

export default function () {
    const res = http.get("https://onlineboutique.dev");
    sleep(1);
    check(res, {
        'is status 200': r => r.status === 200,
    });
}