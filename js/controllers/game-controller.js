import * as cardView from "../views/card-view.js";
import { getCard, cardsLeft} from "../services/deck-service.js";

function start() {
    cardView.bind("button", buttonHandler);
    cardView.render();
}

function buttonHandler() {
    getCard(cardView.render);
}

export { start };
