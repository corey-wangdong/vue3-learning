import { del, get, post, put } from './base_axios';
import { HttpRequestConfig, serveType } from './types';
import { getFullPath, getUrlByQuery } from './utils';

export default class BaseService {
  getByQuery = <T>(
    micro: serveType,
    path: string,
    data: any = {},
    config?: HttpRequestConfig
  ): Promise<T> => {
    const curPath = getUrlByQuery(path, data);
    return this.get<T>(micro, curPath, config);
  };

  get = <T>(
    micro: serveType,
    path: string,
    config?: HttpRequestConfig
  ): Promise<T> => get<T>(getFullPath(micro, path), config);

  post = <T>(
    micro: serveType,
    path: string,
    data: any = {},
    config?: HttpRequestConfig
  ): Promise<T> => post<T>(getFullPath(micro, path), data, config);
  put = <T>(
    micro: serveType,
    path: string,
    data: any = {},
    config?: HttpRequestConfig
  ): Promise<T> => put<T>(getFullPath(micro, path), data, config);
  del = <T>(
    micro: serveType,
    path: string,
    config?: HttpRequestConfig
  ): Promise<T> => del<T>(getFullPath(micro, path), config);
}

export const apiService = new BaseService();
