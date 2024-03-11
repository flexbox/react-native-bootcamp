import { observable } from "@legendapp/state";
import {
  configureObservablePersistence,
  persistObservable,
} from '@legendapp/state/persist'
import { ObservablePersistAsyncStorage } from '@legendapp/state/persist-plugins/async-storage'
import AsyncStorage from '@react-native-async-storage/async-storage'

configureObservablePersistence({
  pluginLocal: ObservablePersistAsyncStorage,
  localOptions: {
    asyncStorage: {
      AsyncStorage,
    },
  },
})

export const state$ = observable({
  expenses: [
    { id: "1", title: "Groceries", amount: 50.0 },
    { id: "2", title: "Electric Bill", amount: 75.0 },
  ],
});

persistObservable(state$, {
  local: 'store',
})