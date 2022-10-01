import CMS from 'netlify-cms';
import { LandingPreview } from './LandingPreview';

CMS.init();
CMS.registerPreviewStyle('/dsfr.min.css');
CMS.registerPreviewTemplate('landing', LandingPreview);

export default {
  CMS
};
