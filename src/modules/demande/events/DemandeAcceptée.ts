import { BaseDomainEvent, makeDomainEvent } from '../../../libs/archi/DomainEvent';

export type DemandeAcceptée = BaseDomainEvent & {
  type: 'DemandeAcceptée';
  payload: {
    demandeId: string;
    acceptéePar: string;
    acceptéeLe: number;
  };
};

export const DemandeAcceptée = (payload: DemandeAcceptée['payload']): DemandeAcceptée =>
  makeDomainEvent({
    type: 'DemandeAcceptée',
    payload,
    aggregateId: payload.demandeId, // aggregateId is always derived from the payload
  });
