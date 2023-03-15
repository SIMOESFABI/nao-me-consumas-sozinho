import { start as gameControllerStart } from "./controllers/game-controller.js";
import { start as detailsControllerStart } from "./controllers/details-controller.js";

const ROUTES = {
    card: {
        hash: "#card",
        controller: gameControllerStart,
    },
    details: {
        hash: "#details",
        controller: detailsControllerStart,
    },
};

const DEFAULT_ROUTE = "card";
let currentHash = "";

function hashCheck() {
    if (window.location.hash === currentHash) {
        return;
    }

    let routeName = Object.keys(ROUTES).find(
        (name) => ROUTES[name].hash === window.location.hash
    );
    if (!routeName) {
        routeName = DEFAULT_ROUTE;
        window.location.hash = ROUTES[routeName].hash;
    }

    loadController(ROUTES[routeName].controller);
}

function loadController(controller) {
    try {
        controller();
    } catch (err) {
        console.log(err.stack);
        window.location.hash = ROUTES[DEFAULT_ROUTE].hash;
    }
}

function start() {
    window.location.hash = window.location.hash || ROUTES[DEFAULT_ROUTE].hash;
}

window.onhashchange = hashCheck;

export { start };
