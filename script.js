// Fungsi untuk menampilkan atau menyembunyikan penjelasan pencemaran saat diklik
function toggleExplanation(index) {
    var explanation = document.getElementById('explanation-' + index);
    var currentDisplay = explanation.style.display;
    if (currentDisplay === 'none' || currentDisplay === '') {
        explanation.style.display = 'block';
    } else {
        explanation.style.display = 'none';
    }
}

// Fungsi untuk mengubah mode tampilan (rapi atau berantakan)
function toggleMode() {
    var body = document.body;
    body.classList.toggle('neat');
    body.classList.toggle('chaotic');
}

// Fungsi untuk menampilkan atau menyembunyikan penjelasan pencemaran saat diklik
function toggleExplanation(index) {
    var explanation = document.getElementById('explanation-' + index);
    var currentDisplay = explanation.style.display;

    if (currentDisplay === 'none' || currentDisplay === '') {
        // Pertanyaan untuk menampilkan penjelasan
        var showConfirmation = confirm("Apakah Anda ingin menampilkan penjelasan ini?");
        if (showConfirmation) {
            explanation.style.display = 'block'; // Menampilkan penjelasan
        }
    } else {
        // Pertanyaan untuk menyembunyikan penjelasan
        var hideConfirmation = confirm("Apakah Anda ingin menyembunyikan penjelasan ini?");
        if (hideConfirmation) {
            explanation.style.display = 'none'; // Menyembunyikan penjelasan
        }
    }
}

// Fungsi untuk menampilkan tabel ketika tombol diklik
function showTable(tableId) {
    var tableContainer = document.getElementById(tableId);
    tableContainer.style.display = 'block'; // Menampilkan tabel
}

// Fungsi untuk menyembunyikan tabel ketika tombol "Tutup" diklik
function hideTable(tableId) {
    var tableContainer = document.getElementById(tableId);
    tableContainer.style.display = 'none'; // Menyembunyikan tabel
}
