//import { AppStore } from "../store";

//export const invokeAsync = (options) => {
//    let store: any = options.store;
    
//    if (typeof options === 'function') { options = { action: options } };
    
//    let actionId = options.params ? options.action(options.params) : options.action();
//    let subscription = store.subscribe((state: IAppState) => {
//        if (state.lastTriggeredByActionId == actionId) {
//            if (subscription)
//                subscription.dispose();
//            deferred.resolve();
//        }
//    });
//    return deferred.promise;
//}