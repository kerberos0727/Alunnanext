import axios from 'axios';
import { HttpErrorResponseModel } from 'models/error.model';
import { v4 as uuid } from 'uuid';

const BASE_URL: string = process.env.REACT_APP_API_BASE_URL as string;

// const BASE_URL: string = "http://localhost:8000"

export const get = async (endpoint: string, config?: any): Promise<any | HttpErrorResponseModel> => {
    try {
        const url = BASE_URL + endpoint;
        const response = await axios.get(url, { ...config });
        return response.data;
    } catch (error) {
        return toHttpErrorModel(error);
    }
}
export const post = async (endpoint: string, data: any, config?: any): Promise<any | HttpErrorResponseModel> => {
    try {
        const url = BASE_URL + endpoint;
        const response = await axios.post(url, { ...config, data });
        return response.data;
    } catch (error) {
        return toHttpErrorModel(error);
    }
}

export const toHttpErrorModel = (error: any): HttpErrorResponseModel => {
    let id = uuid();
    let message: string = error.message;
    let status: number = error.status;

    if (error.response) {
        message = error.response.message;
        status = error.response.status;
    } else if (error.request) {
        console.log(error.request);
    }

    return new HttpErrorResponseModel(id, status, message);
};
