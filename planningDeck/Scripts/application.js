var module = (function (a, b) {
    var cardShow = function () {
        return this.className === "card-small" ?
            (d = this.getAttribute("data-target"), e.style.display = "none", f.style.display = "block")
          : this.id === "card-large-voted" ?
            (f.style.display = "none", a.getElementById(d).style.display = "block", d = b)
            : this.className === "card-large" && (this.style.display = "none", e.style.display = ""), this.blur(), !1
    }
    for (var d, e = a.getElementById("card-small-grid"), f = a.getElementById("card-large-voted"), g = a.getElementsByTagName("div"), h = g.length; h--;)
        g[h].onclick = cardShow
     
 
    var tShirt = document.getElementById('tShirt');
    tShirt.onclick = function () {
        var listSmallCard = document.getElementsByClassName('card-small');
        listSmallCard[0].innerHTML = 'xs';
        listSmallCard[1].innerHTML = 'X';
        listSmallCard[2].innerHTML = 'M';
        listSmallCard[3].innerHTML = 'L';
        listSmallCard[4].innerHTML = 'XL';
        listSmallCard[5].innerHTML = 'XXL';
        listSmallCard[6].innerHTML = 'XXXL';
        listSmallCard[7].innerHTML = 'L';
        listSmallCard[8].innerHTML = 'L';
        listSmallCard[9].innerHTML = 'L';
        listSmallCard[10].innerHTML = 'L';
        listSmallCard[11].innerHTML = 'L';

        var listLargeCard = document.getElementsByClassName('card-large');
        listLargeCard[0].innerHTML = 'xs';
        listLargeCard[1].innerHTML = 'X';
        listLargeCard[2].innerHTML = 'M';
        listLargeCard[3].innerHTML = 'L';
        listLargeCard[4].innerHTML = 'XL';
        listLargeCard[5].innerHTML = 'XXL';
        listLargeCard[6].innerHTML = 'XXXL';
        listLargeCard[7].innerHTML = 'L';
        listLargeCard[8].innerHTML = 'L';
        listLargeCard[9].innerHTML = 'L';
        listLargeCard[10].innerHTML = 'L';
        listLargeCard[11].innerHTML = 'L';

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

