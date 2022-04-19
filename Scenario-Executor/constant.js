import { sleep, check } from "k6";
import http from "k6/http";

export const options = {
    scenarios: {
         constant_scenario: {
             executor: "constant-vus",
             vus: 5,	//number of VUs to run concurrently
             duration: "5s",	//total scenario duration
            startTime: '0s'	// starting time of scenario
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