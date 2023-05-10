import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse
} from 'axios';
import httpServer from './httpMiddleware';
import { responseCheck } from './utils';
import { HttpRequestConfig } from './types';
import { ElMessage } from 'element-plus';

// 创建 axios 实例
const axiosInstance: AxiosInstance = axios.create();

// request 拦截器
axiosInstance.interceptors.request.use(
  config => config,
  (error: AxiosError) => Promise.reject(error)
);

// response 拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data, config } = response;
    if (
      (data && (data.success === false || data.status === false)) ||
      (responseCheck(config?.url) && data?.code !== 0)
    ) {
      return Promise.reject(data);
      // 此处错误后不返回内容，直接交给业务代码做catch处理
    } else {
      // Toast.clear();
      return response;
    }
  },
  (error: AxiosError) => {
    console.log('err in http', error.message);
    return Promise.reject(error.response);
  }
);

function configMiddleware(jsonConfig?: HttpRequestConfig): AxiosRequestConfig {
  const config = JSON.parse(JSON.stringify(jsonConfig || ''));
  if (config?.loadingConfig && Object.keys(config?.loadingConfig).length > 0) {
    // Toast.show(config.loadingConfig);
    ElMessage({
      message: config.loadingConfig,
    })
  } else if (config?.needLoading) {
    // Toast.show({
    //   icon: 'loading',
    //   content: '加载中…'
    // });
    ElMessage({
      type: 'error',
      message: '加载中…'
    })
  }
  if (config) {
    delete config.needLoading;
  }
  return {
    ...httpServer(),
    ...config
  };
}

// get 方法
export function get<T>(url: string, config?: HttpRequestConfig): Promise<T> {
  return axiosInstance
    .get<T>(url, configMiddleware(config))
    .then((res: AxiosResponse) => res?.data);
}

// post 方法
export function post<T>(
  url: string,
  data: any,
  config?: HttpRequestConfig
): Promise<T> {
  return axiosInstance
    .post<T>(url, data, configMiddleware(config))
    .then((res: AxiosResponse) => res?.data);
}

// put 方法
export function put<T>(
  url: string,
  data: any,
  config?: HttpRequestConfig
): Promise<T> {
  return axiosInstance
    .put<T>(url, data, configMiddleware(config))
    .then((res: AxiosResponse) => res.data);
}

// del 方法
export function del<T>(
  url: string,
  data: any,
  config?: HttpRequestConfig
): Promise<T> {
  return axiosInstance
    .delete<T>(url, configMiddleware(config))
    .then((res: AxiosResponse) => res.data);
}
// TODO:如果需要，按照上方请求格式自己添加其他请求方式
export default axiosInstance;
