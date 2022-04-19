import { sleep, check } from "k6";
import http from "k6/http";

export const options = {
    scenarios: {
         per_vu_scenario: {
           executor: "per-vu-iterations", //5*5=25 iterations
             vus: 5,	//Number of VUs to run concurrently
             iterations: 5,	//Number of exec function iterations to be executed by each VU.
             startTime: '3s' //starting time of the scenario
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