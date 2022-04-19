import { sleep, check } from "k6";
import http from "k6/http";

export const options = {
    scenarios: {
        externally_controller_scenario: {
            executor: 'externally-controlled',
            vus: 10,		//number of VUs to run concurrently.
            maxVUs: 30,		//maximum number of VUs to allow during the test run.
            duration: '2m',	//Total test duration
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