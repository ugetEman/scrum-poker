﻿(function (a, b) {
    function c() {
        return this.className === "card-small" ?
            (d = this.getAttribute("data-target"), e.style.display = "none", f.style.display = "block")
          : this.id === "card-large-voted" ?
            (f.style.display = "none", a.getElementById(d).style.display = "block", d = b)
            : this.className === "card-large" && (this.style.display = "none", e.style.display = ""), this.blur(), !1
    }
    for (var d, e = a.getElementById("card-small-grid"),
        f = a.getElementById("card-large-voted"),
        g = a.getElementsByTagName("div"),
        h = g.length; h--;)
        g[h].onclick = c
})(this.document)