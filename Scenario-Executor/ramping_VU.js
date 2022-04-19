import { sleep, check } from "k6";
import http from "k6/http";

export const options = {
    scenarios: {
         ramping_vus_scenario: {
             executor: "ramping-vus",
             startTime: '0s',
             stages: [{ 		//Array of objects [ ] that specify the target number of VUs to ramp up or ramp down to.
                     target: 5,
                     duration: "15s"	//total scenario duration
                 }
             ]
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