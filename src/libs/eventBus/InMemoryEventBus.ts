import { DomainEvent } from '../archi/DomainEvent';
import { EventBus } from '../archi/EventBus';
import { EventHandler } from '../archi/EventHandler';

// en version fonction :
export const makeInMemoryEventBus = (): EventBus => {
  const _subscriptionsForType: Partial<Record<DomainEvent['type'], EventHandler[]>> = {};
  const _subscriptionsForAll: EventHandler[] = [];

  return {
    publish: async (event: DomainEvent) => {
      const { type } = event;

      console.log(`Publish [${event.type}] ${JSON.stringify(event.payload)}`);

      const callbacksForType = _subscriptionsForType[type] || [];
      if (!callbacksForType.length && !_subscriptionsForAll.length) {
        console.warn({ eventtype: event.type }, `There are no subscriptions for this type : '${event.type}'`);
        return;
      }

      await Promise.all([
        ...callbacksForType.map(async (cb) => {
          await cb(event);
        }),
        ..._subscriptionsForAll.map(async (cb) => {
          await cb(event);
        }),
      ]);
    },
    subscribeAll: (callback: EventHandler) => {
      _subscriptionsForAll.push(callback);
    },
    subscribe: async <Event extends DomainEvent>(type: Event['type'], callback: EventHandler<Event>) => {
      _subscriptionsForType[type] = [...(_subscriptionsForType[type] || []), callback as EventHandler];
    },
  };
};
