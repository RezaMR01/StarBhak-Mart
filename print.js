function printData() {
    var divToPrint = document.getElementById("printPage");

    var newWin = window.open("", "_blank");

    newWin.document.write('<html><head><title>Print</title>');
    newWin.document.write('<link rel="stylesheet" href="style.css">'); // Gantilah dengan path sesuai kebutuhan
    newWin.document.write('</head><body>');
    $(".dede").hide();
    
    newWin.document.write('<div id="tax">' + $("#tax").text() + '</div>');
    newWin.document.write('<div id="harga">' + $("#harga").text() + '</div>');
    newWin.document.write('');
    newWin.document.write(divToPrint.outerHTML);
    newWin.document.write('</body></html>');
    newWin.document.close();
    newWin.print();
    newWin.close();
}