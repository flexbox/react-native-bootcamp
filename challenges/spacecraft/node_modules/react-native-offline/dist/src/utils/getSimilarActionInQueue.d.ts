import { EnqueuedAction } from '../types';
/**
 * Finds and returns a similar thunk or action in the actionQueue.
 * Else undefined.
 * @param action
 * @param actionQueue
 */
export default function getSimilarActionInQueue(action: any, actionQueue: EnqueuedAction[]): import("../types").FluxAction<any> | import("../types").Thunk | undefined;
