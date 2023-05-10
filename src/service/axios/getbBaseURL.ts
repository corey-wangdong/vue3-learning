import { ProjectInter, serveType } from './types';
import config from './project';

const project: ProjectInter = {
  api: {
    baseURL: config.API_HOST
  }
};

export default function getBaseUrl(type: serveType): string {
  return project[type].baseURL;
}
