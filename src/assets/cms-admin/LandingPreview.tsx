import React from 'react';
import { AccueilPage } from '../../pages/accueil/AccueilPage';

// LandingPreview passe les data de NetlifyCMS au composant React
export const LandingPreview = ({ entry }: any) => {
  const props = entry.get('data').toJS();

  return <AccueilPage {...props} />;
};
