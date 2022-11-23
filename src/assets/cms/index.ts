import CMS from 'netlify-cms';
import { LandingPreview } from './LandingPreview';

CMS.init();
CMS.registerPreviewStyle('https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@1.8.2/dist/dsfr.min.css');
CMS.registerPreviewTemplate('landing', LandingPreview);

export default {
  CMS
};
