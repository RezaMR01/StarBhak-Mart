$(document).ready(function() {
    $('#searchIcon').on('click', function() {
        $('#searchInput').fadeToggle('fast');
        $('#searchInput').focus();
    });

    $('#searchInput').on('keyup', function() {
        var value = $(this).val().toLowerCase();
        var items = $('.isi');
        var matchingItems = items.filter(function() {
            return $(this).text().toLowerCase().indexOf(value) > -1;
        });

        items.hide();  // Sembunyikan semua item
        matchingItems.show();  // Tampilkan item yang cocok dengan pencarian

        // Tampilkan pesan jika tidak ada barang yang ditemukan
        if (matchingItems.length === 0) {
            $('#notFoundMessage').show();
        } else {
            $('#notFoundMessage').hide();
        }
    });

    $('#searchInput').on('focusout', function() {
        $(this).fadeOut('fast');
    });
});
