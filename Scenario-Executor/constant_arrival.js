import { sleep, check } from "k6";
import http from "k6/http";

export const options = {
    scenarios: {
         constant_arrival_scenario: {
             executor: "constant-arrival-rate",
             rate: 5,	//number of iterations to start during each timeunit period.
             duration: '20s',	//total scenario duration
             preAllocatedVUs: 5,	//number of VUs to pre-allocate before test start to preserve runtime resources.
             maxVUs: 10,	//maximum number of VUs to allow during test run.
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