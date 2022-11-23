import CMS from 'netlify-cms';
import { LandingPreview } from './LandingPreview';

CMS.init();
CMS.registerPreviewTemplate('landing', LandingPreview);

export default {
  CMS
};
