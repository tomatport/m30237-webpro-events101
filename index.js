'use strict';

function targetTextToConsole(event) {
  console.log(event.target.textContent);
}

function tttcAttacher() {
  button0.addEventListener('click', targetTextToConsole);
}

function lovelyParaAttacher() {
  thisisalovelyparagraph.addEventListener('click', lovelyToggle);
}

function lovelyButtonAttacher() {
  button1.addEventListener('click', lovelyToggle);
}

function concatAttacher() {
  in1.addEventListener('change', function () {
    out1.innerText = `${in1.value}${in2.value}`;
  });

  in2.addEventListener('change', function () {
    out1.innerText = `${in1.value}${in2.value}`;
  });
}

function snitchAttacher() {
  mousewatcher.addEventListener('mouseover', snitchUpdater);
  mousewatcher.addEventListener('mouseout', snitchUpdater);
}

function reportAttacher() {
  mousereporter.addEventListener('mousemove', reportUpdater);
}

function reportUpdater(event) {
  const x = event.screenX;
  const y = event.screenY;
  report.innerText = `x: ${x} y: ${y}`;
}

function idValidationAttacher() {
  newid.addEventListener('input', function () {
    if (newid.value.includes(' ')) {
      newid.classList.add('invalid');
    } else {
      newid.classList.remove('invalid');
    }
  });
}
