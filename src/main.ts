import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import AppModule from "./app/app.module";

export const platformRef = platformBrowserDynamic();

export function main() {
    return platformRef.bootstrapModule(AppModule)
        .catch(err => console.error(err));
}

switch (document.readyState) {
    case "complete":
        main();
        break;
    case "loading":
    default:
        document.addEventListener("DOMContentLoaded", () => main());
}