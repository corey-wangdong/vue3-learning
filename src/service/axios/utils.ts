import getBaseUrl from './getbBaseURL';
import { serveType } from './types';

export function responseCheck(url?: string): boolean {
  // api域名为后端新框架，统一了接口返回逻辑，如果code不为 0 则返回错误信息
  try {
    return !!url && url?.split('/')[2].split('.')[0] === 'api';
  } catch (error) {
    return false;
  }
}

export const getFullPath = (micro: serveType, path: string) =>
  `${getBaseUrl(micro)}${path}`;

export const getUrlByQuery = (url: string, params: any): string => {
  let curUrl = url;
  if (params) {
    const paramsArray: string[] = [];
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined) {
        paramsArray.push(`${key}=${params[key]}`);
      }
    });
    if (url.search(/\?/) === -1) {
      curUrl += `?${paramsArray.join('&')}`;
    } else {
      curUrl += `&${paramsArray.join('&')}`;
    }
  }
  return curUrl;
};
