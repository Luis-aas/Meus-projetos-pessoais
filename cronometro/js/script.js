"use strict";

var hh = 0;
var mm = 0;
var ss = 0;
var tempo = 1000;
var cron;

function start() {
    var sumirButton = document.querySelector('.azulzin');
    sumirButton.style.display = 'none'; // Oculta o botão ao iniciar o cronômetro
    cron = setInterval(() => { timer(); }, tempo);
}

function pause() {
    clearInterval(cron);

    var sumir = document.querySelector('.azulzin');
    sumir.style.display = 'inline-block';
}

function stop() {
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;
    document.getElementById('counter').innerText = '00:00:00';

    // Mostra o botão novamente ao parar o cronômetro
    var sumir = document.querySelector('.azulzin');
    sumir.style.display = 'inline-block';
}

function timer() {
    ss++;

    if (ss == 60) {
        ss = 0;
        mm++;

        if (mm == 60) {
            mm = 0;
            hh++;
        }
    }

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    document.getElementById('counter').innerText = format;
}
