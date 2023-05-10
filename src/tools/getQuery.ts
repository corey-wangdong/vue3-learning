// 解析url中的参数
export interface GetAllQueryInter {
  [propName: string]: string | null | void;
}

function getQueryString(name?: string, url?: string): string {
  if (!url) url = window.location.search;
  name = name?.replace(/[\[\]]/g, '\\$&') || '';
  const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return '';
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function getQueryAll(url?: string): GetAllQueryInter {
  if (!url) url = window.location.search;
  try {
    const urlRep: string = url.match(/\?([^#]+)/)?.[1] || '';
    if (!urlRep) {
      return {};
    }
    const obj: GetAllQueryInter = {},
      arr: Array<string> = urlRep.split('&');
    for (let i = 0; i < arr.length; i++) {
      const subArr: Array<string> = arr[i].split('=');
      const key: string = decodeURIComponent(subArr[0]);
      const value: string = decodeURIComponent(subArr[1]);
      obj[key] = value;
    }
    return obj;
  } catch (err) {
    return {};
  }
}
export { getQueryString, getQueryAll };
