function largest() {
    var nub1 = Number(document.getElementById("frist").value);
    var nub2 = Number(document.getElementById("second").value);
    var nub3 = Number(document.getElementById("thrid").value);
    var nub4 = Number(document.getElementById("fourth").value);
    var nub5 = Number(document.getElementById("fifth").value);



    if (nub1 > nub2 && nub1 > nub3 && nub1 > nub4 && nub1 > nub5) {
        window.alert(nub1 + "is largest number");
    }
    else if (nub2 > nub1 && nub2 > nub3 && nub2 > nub4 && nub2 > nub5) {
        window.alert(nub2 + "is largest number");
    }
    else if (nub3 > nub1 && nub3 > nub2 && nub3 > nub4 && nub3 > nub5) {
        window.alert(nub3 + "is largest number");

    }
    else if (nub4 > nub1 && nub4 > nub2 && nub4 > nub3 && nub4 > nub5) {
        window.alert(nub4 + "is largest number");

    }
    else if (nub5 > nub1 && nub5 > nub2 && nub5 > nub3 && nub5 > nub4) {
        window.alert(nub5 + "is largest number");

    }
}




























