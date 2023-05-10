import { apiService } from '../axios';
import { IResponseData, serveType } from '../axios/types';

const WAY = serveType.api;
const LOADING = {
  needLoading: true
  // loadingConfig: {
  //   icon: 'loading',
  //   maskClickable: false
  // }
};
// 用户数据的基本信息
export const getBaseInfo = (time: any) =>
  apiService.getByQuery<IResponseData<any>>(
    WAY,
    'app-interface/v1/setting/privacy_base_info',
    { time_span: time },
    LOADING
  );

// 用户设备的详细信息
export const getDeviceInfo = (data: string) =>
  apiService.post<IResponseData<any>>(
    WAY,
    'app-interface/v1/setting/privacy_device_info',
    { net_status: data },
    LOADING
  );
// 获取用户体重详情
export const getWeightManage = () =>
  apiService.get<IResponseData<any>>(
    WAY,
    'app-interface/v1/user/weight_management'
  );
