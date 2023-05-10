import { AxiosRequestConfig } from 'axios';

export interface HttpRequestLoadingConfig {
  needLoading?: boolean;
  don?: boolean;
}
export type HttpRequestConfig = AxiosRequestConfig & HttpRequestLoadingConfig;

export enum serveType {
  api = 'api'
}

export interface UrlInter {
  [propName: string]: string;
}

export type ProjectInter = {
  [key in serveType]: {
    baseURL: string;
  };
};

export interface IResponseData<T> {
  errCode: number;
  errMsg?: string;
  status: string;
  message?: string;
  code?: number;
  data: T;
}
