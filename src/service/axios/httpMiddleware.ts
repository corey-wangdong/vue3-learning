import { AxiosRequestConfig } from 'axios';
import { getAppDivice, getAppKey, getAppVersion } from 'src/tools/app_utils';
import { getQueryAll } from 'src/tools/getQuery';
// const { token, roleToken } = store.getState().user;

const httpServer = () => {
  // 配合后端埋点
  const {
    app_device: appd,
    app_version: appv,
    app_key: appk,
    os_version: osv
  } = getQueryAll();

  const httpDefaultOpts: AxiosRequestConfig = {
    timeout: 10000,
    headers: {
      token: 'jNpXyeFR2QDCKmKwaTinsDb8T83sbgzm',
      'role-token': '' || '',
      'X-Requested-With': 'XMLHttpRequest',
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
      // 添加 设备信息
      'App-Device': appd || getAppDivice(),
      'App-Version': appv || getAppVersion(),
      'App-Key': appk || getAppKey(),
      'Os-Version': osv || ''
    }
  };

  return httpDefaultOpts;
};
export default httpServer;
