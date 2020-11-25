'use strict';

/**
 * Utility functions for reference that may be used by tests
 * for various reasons.
 */

function exampleAttacher() {
  window.exampleid.addEventListener("click", exampleEventHandler);
}

function exampleEventHandler(event) {
    console.log("This is a", event.type, "event.");
}

// used by snitchAttacher
function snitchUpdater(event) {
  window.snitch.textContent = (event.type == 'mouseover' ? "IN" : "OUT");
}

// used by lovelyParaAttacher
function lovelyToggle() {
    window.thisisalovelyparagraph.classList.toggle("lovely");
}
