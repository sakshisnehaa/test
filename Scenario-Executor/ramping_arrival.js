import { sleep, check } from "k6";
import http from "k6/http";

export const options = {
    scenarios: {
         ramping_arrival_scenario: {
             executor: 'ramping-arrival-rate',
             startRate: 2,	//number of iterations to execute eacch timeunit period at test start.
             timeUnit: '1s',		//period of time to apply the startRate the stages target value.
             preAllocatedVUs: 2,		//number of VUs to pre-allocate before test start to preserve runtime resources.
             maxVUs: 50,		//maximum number of VUs to allow during the test run.
             stages: [{			//Array of objects [ ] that specify the target number of VUs to ramp up or ramp down to.
                     target: 15,
                     duration: '30s'
                 },
             ],
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