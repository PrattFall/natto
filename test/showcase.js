document.addEventListener('DOMContentLoaded', function () {
    var tn = document.getElementById('testnato'),
        tnc = document.getElementById('testnatocontainer'),
        nto = new Natto(),
        cf = new Curfo('natto-word'),
        finishedCheck = document.getElementsByClassName('finished')[0].querySelectorAll('img')[0];

    nto.attach(tn, 'LAPD');

    function doStuff() {
      nto.update()
      nto.display(tnc, 'span', 'natto-word');
      cf.init();
      finishedCheck.className = "";
    }

    cf.onFinished(function () {
      finishedCheck.className = 'is-finished';
    });

    tn.addEventListener('input', doStuff);
}, false);
