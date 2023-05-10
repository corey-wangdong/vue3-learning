import qa from './qa';
import rc from './rc';
import production from './production';
import { UrlInter } from '../types';
let config;

switch (import.meta.env.MODE) {
  case 'production':
    config = production;
    break;
  case 'qa':
    config = qa;
    break;
  default:
    config = rc;
    break;
}

export default config as UrlInter;
