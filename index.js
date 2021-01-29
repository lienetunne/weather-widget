import { Router } from 'express';
import request from 'request';

module.exports = ({ config }) => {
  const api = Router();

  api.get('/current', (req, res) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=2a31870381a1480babd82748212701&q=London`;
    request(
      {
        url,
        json: true
      },
      (error, response, body) => {
        let apiResult;
        const errorResponse = error || body.error;

        if (errorResponse) {
          apiResult = { code: 500, result: errorResponse };
        } else {
          apiResult = { code: 200, result: body };
        }

        res.status(apiResult.code).json(apiResult);
      }
    );
  });

  api.get('/forecast', (req, res) => {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=2a31870381a1480babd82748212701&q=London&days=3`;
    request(
      {
        url,
        json: true
      },
      (error, response, body) => {
        let apiResult;
        const errorResponse = error || body.error;

        if (errorResponse) {
          apiResult = { code: 500, result: errorResponse };
        } else {
          apiResult = { code: 200, result: body };
        }

        res.status(apiResult.code).json(apiResult);
      }
    );
  });

  return api;
};
