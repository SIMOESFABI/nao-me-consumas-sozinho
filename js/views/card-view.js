const elements = {};
const handlers = {};

function render(card) {
    createButton();

    if (card) {
        createCard(card);
    }
}

function createButton() {
    if (elements.button) {
        return;
    }
    const app = $("#app");
    const button = $(
        "<button id='new-card'>Click me to draw a card</button>"
    );
    elements.button = button;

    $(elements.button).click(handlers.button);
    app.append(elements.button);
}

function bind(element, handler) {
    handlers[element] = handler;
}

function createCard({cardCode, cardMessage}) {
    if (elements.card) {
        $(elements.card).remove();
    }
    const card = $(
        `<div id="card">
            <p><strong>CardCode: </strong>${cardCode}</p>
            <p><strong>Message: </strong>${cardMessage}</p>
        </div>`
    );
    elements.card = card;
    $("#app").append(card);
}

export { render, bind };
