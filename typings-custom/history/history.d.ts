// Type definitions for History v1.12.5
// Project: https://github.com/rackt/history
// Definitions by: B-Stefan <https://github.com/B-Stefan/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "history"{
    export function  createBrowserHistory();
    export function  createMemoryHistory(url:string);
    export function  createLocation(url:string);
}

declare module "history/lib/createMemoryHistory"{
    export default function();
}

declare module "history/lib/createLocation"{
    export default function(url: string);
}