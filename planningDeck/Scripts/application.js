var module = (function (a, b) {

    var listSmallCard = document.getElementsByClassName('card-small');

    var cardShow = function () {
        return this.className === "card-small" ?
            (d = this.getAttribute("data-target"), e.style.display = "none", f.style.display = "block")
          : this.id === "card-large-voted" ?
            (f.style.display = "none", a.getElementById(d).style.display = "block", d = b)
            : this.className === "card-large" && (this.style.display = "none", e.style.display = ""), this.blur(), !1
    }
    for (var d, e = a.getElementById("card-small-grid"), f = a.getElementById("card-large-voted"), g = a.getElementsByTagName("div"), h = g.length; h--;)
        g[h].onclick = cardShow

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var planningPoker = document.getElementById('default');
    planningPoker.onclick = function () {

        listSmallCard[9].style.display = "block";
        listSmallCard[10].style.display = "block";
        listSmallCard[11].style.display = "block";

        listSmallCard[0].getElementsByTagName('span')[0].innerText = '0';
        listSmallCard[1].getElementsByTagName('span')[0].innerText = '½';
        listSmallCard[2].getElementsByTagName('span')[0].innerText = '1';
        listSmallCard[3].getElementsByTagName('span')[0].innerText = '2';
        listSmallCard[4].getElementsByTagName('span')[0].innerText = '3';
        listSmallCard[5].getElementsByTagName('span')[0].innerText = '5';
        listSmallCard[6].getElementsByTagName('span')[0].innerText = '8';
        listSmallCard[7].getElementsByTagName('span')[0].innerText = '13';
        listSmallCard[8].getElementsByTagName('span')[0].innerText = '20';
        listSmallCard[9].getElementsByTagName('span')[0].innerText = '40';
        listSmallCard[10].getElementsByTagName('span')[0].innerText = '100';
        listSmallCard[11].getElementsByTagName('span')[0].innerText = '?';

        var listLargeCard = document.getElementsByClassName('card-large');

        listLargeCard[1].getElementsByTagName('span')[0].innerText = '0';
        listLargeCard[2].getElementsByTagName('span')[0].innerText = '½';
        listLargeCard[3].getElementsByTagName('span')[0].innerText = '1';
        listLargeCard[4].getElementsByTagName('span')[0].innerText = '2';
        listLargeCard[5].getElementsByTagName('span')[0].innerText = '3';
        listLargeCard[6].getElementsByTagName('span')[0].innerText = '5';
        listLargeCard[7].getElementsByTagName('span')[0].innerText = '8';
        listLargeCard[8].getElementsByTagName('span')[0].innerText = '13';
        listLargeCard[9].getElementsByTagName('span')[0].innerText = '20';
        listLargeCard[10].getElementsByTagName('span')[0].innerText = '40';
        listLargeCard[11].getElementsByTagName('span')[0].innerText = '100';
        listLargeCard[12].getElementsByTagName('span')[0].innerText = '?';

    };


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var fibonacciSequence = document.getElementById('fibonacci');
    fibonacciSequence.onclick = function () {

        listSmallCard[9].style.display = "block";
        listSmallCard[10].style.display = "block";
        listSmallCard[11].style.display = "block";

        listSmallCard[0].getElementsByTagName('span')[0].innerText = '0';
        listSmallCard[1].getElementsByTagName('span')[0].innerText = '1';
        listSmallCard[2].getElementsByTagName('span')[0].innerText = '2';
        listSmallCard[3].getElementsByTagName('span')[0].innerText = '3';
        listSmallCard[4].getElementsByTagName('span')[0].innerText = '5';
        listSmallCard[5].getElementsByTagName('span')[0].innerText = '8';
        listSmallCard[6].getElementsByTagName('span')[0].innerText = '13';
        listSmallCard[7].getElementsByTagName('span')[0].innerText = '21';
        listSmallCard[8].getElementsByTagName('span')[0].innerText = '34';
        listSmallCard[9].getElementsByTagName('span')[0].innerText = '55';
        listSmallCard[10].getElementsByTagName('span')[0].innerText = '?';
        listSmallCard[11].getElementsByTagName('span')[0].innerText = '∞';

        var listLargeCard = document.getElementsByClassName('card-large');

        listLargeCard[1].getElementsByTagName('span')[0].innerText = '0';
        listLargeCard[2].getElementsByTagName('span')[0].innerText = '1';
        listLargeCard[3].getElementsByTagName('span')[0].innerText = '2';
        listLargeCard[4].getElementsByTagName('span')[0].innerText = '3';
        listLargeCard[5].getElementsByTagName('span')[0].innerText = '5';
        listLargeCard[6].getElementsByTagName('span')[0].innerText = '8';
        listLargeCard[7].getElementsByTagName('span')[0].innerText = '13';
        listLargeCard[8].getElementsByTagName('span')[0].innerText = '21';
        listLargeCard[9].getElementsByTagName('span')[0].innerText = '34';
        listLargeCard[10].getElementsByTagName('span')[0].innerText = '55';
        listLargeCard[11].getElementsByTagName('span')[0].innerText = '?';
        listLargeCard[12].getElementsByTagName('span')[0].innerText = '∞';

    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var naturalSequence = document.getElementById('natural');
    naturalSequence.onclick = function () {

        listSmallCard[9].style.display = "block";
        listSmallCard[10].style.display = "block";
        listSmallCard[11].style.display = "block";

        listSmallCard[0].getElementsByTagName('span')[0].innerText = '1';
        listSmallCard[1].getElementsByTagName('span')[0].innerText = '2';
        listSmallCard[2].getElementsByTagName('span')[0].innerText = '3';
        listSmallCard[3].getElementsByTagName('span')[0].innerText = '4';
        listSmallCard[4].getElementsByTagName('span')[0].innerText = '5';
        listSmallCard[5].getElementsByTagName('span')[0].innerText = '6';
        listSmallCard[6].getElementsByTagName('span')[0].innerText = '7';
        listSmallCard[7].getElementsByTagName('span')[0].innerText = '8';
        listSmallCard[8].getElementsByTagName('span')[0].innerText = '9';
        listSmallCard[9].getElementsByTagName('span')[0].innerText = '10';
        listSmallCard[10].getElementsByTagName('span')[0].innerText = '?';
        listSmallCard[11].getElementsByTagName('span')[0].innerText = '∞';

        var listLargeCard = document.getElementsByClassName('card-large');

        listLargeCard[1].getElementsByTagName('span')[0].innerText = '1';
        listLargeCard[2].getElementsByTagName('span')[0].innerText = '2';
        listLargeCard[3].getElementsByTagName('span')[0].innerText = '3';
        listLargeCard[4].getElementsByTagName('span')[0].innerText = '4';
        listLargeCard[5].getElementsByTagName('span')[0].innerText = '5';
        listLargeCard[6].getElementsByTagName('span')[0].innerText = '6';
        listLargeCard[7].getElementsByTagName('span')[0].innerText = '7';
        listLargeCard[8].getElementsByTagName('span')[0].innerText = '8';
        listLargeCard[9].getElementsByTagName('span')[0].innerText = '9';
        listLargeCard[10].getElementsByTagName('span')[0].innerText = '10';
        listLargeCard[11].getElementsByTagName('span')[0].innerText = '?';
        listLargeCard[12].getElementsByTagName('span')[0].innerText = '∞';

    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var tShirt = document.getElementById('tShirt');
    tShirt.onclick = function () {

        listSmallCard[0].getElementsByTagName('span')[0].innerText = 'xs';
        listSmallCard[1].getElementsByTagName('span')[0].innerText = 'M';
        listSmallCard[2].getElementsByTagName('span')[0].innerText = 'X';
        listSmallCard[3].getElementsByTagName('span')[0].innerText = 'L';
        listSmallCard[4].getElementsByTagName('span')[0].innerText = 'XL';
        listSmallCard[5].getElementsByTagName('span')[0].innerText = '2XL';
        listSmallCard[6].getElementsByTagName('span')[0].innerText = 'W';
        listSmallCard[7].getElementsByTagName('span')[0].innerText = '?';
        listSmallCard[8].getElementsByTagName('span')[0].innerText = '∞';
        listSmallCard[9].style.display = "none";
        listSmallCard[10].style.display = "none";
        listSmallCard[11].style.display = "none";

        var listLargeCard = document.getElementsByClassName('card-large');

        listLargeCard[1].getElementsByTagName('span')[0].innerText = 'xs';
        listLargeCard[2].getElementsByTagName('span')[0].innerText = 'M';
        listLargeCard[3].getElementsByTagName('span')[0].innerText = 'X';
        listLargeCard[4].getElementsByTagName('span')[0].innerText = 'L';
        listLargeCard[5].getElementsByTagName('span')[0].innerText = 'XL';
        listLargeCard[6].getElementsByTagName('span')[0].innerText = '2XL';
        listLargeCard[7].getElementsByTagName('span')[0].innerText = 'W';
        listLargeCard[8].getElementsByTagName('span')[0].innerText = '?';
        listLargeCard[9].getElementsByTagName('span')[0].innerText = '∞';
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var red = document.getElementById('redColor');
    red.onclick = function () {
        var listSmallCard = document.getElementsByClassName('card-small');

        for (i = 0; i < listSmallCard.length; i++) {
            document.getElementsByTagName('span')[i].style.backgroundColor = '#ff6a00';
        }

    };

    var blue = document.getElementById('blueColor');
    blue.onclick = function () {
        var listSmallCard = document.getElementsByClassName('card-small');

        for (i = 0; i < listSmallCard.length; i++) {
            document.getElementsByTagName('span')[i].style.backgroundColor = '#0094ff';
        }

    };

    var green = document.getElementById('greenColor');
    green.onclick = function () {
        var listSmallCard = document.getElementsByClassName('card-small');

        for (i = 0; i < listSmallCard.length; i++) {
            document.getElementsByTagName('span')[i].style.backgroundColor = '#35960c';
        }
    };

    var grey = document.getElementById('greyColor');
    grey.onclick = function () {
        var listSmallCard = document.getElementsByClassName('card-small');

        for (i = 0; i < listSmallCard.length; i++) {
            document.getElementsByTagName('span')[i].style.backgroundColor = '#999';

        }

    };
   


})(this.document)

