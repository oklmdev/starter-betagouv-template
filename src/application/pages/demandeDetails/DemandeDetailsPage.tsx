import * as React from 'react';
import { Layout } from '../components/layout/Layout';

export type DemandeDetailsPageProps = {
  demande: {
    id: string;
    justification: string;
    status: string;
    acceptéeLe?: number;
  };
  message?: string;
};

export const DemandeDetailsPage = ({ demande, message }: DemandeDetailsPageProps) => {
  const { justification, id, status } = demande;
  return (
    <Layout>
      Demande
      <div>{justification}</div>
      <div>Status: {status}</div>
      {status === 'déposée' && (
        <form method='post'>
          <button type='submit'>Accepter la demande</button>
        </form>
      )}
      {status === 'acceptée' && demande.acceptéeLe && <div>Acceptée le {new Date(demande.acceptéeLe).toDateString()}</div>}
      {message && <div>{message}</div>}
    </Layout>
  );
};
