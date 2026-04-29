import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '20s', target: 20 },
    { duration: '2m', target: 20 },
    { duration: '10s', target: 0 },
  ],
};

export default function () {
  http.get('http://lojaebac.ebaconline.art.br/');
  sleep(1);
}
