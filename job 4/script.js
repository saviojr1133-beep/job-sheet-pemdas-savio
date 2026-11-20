// Membuat fungsi penilai dengan percabangan logika dan detektor grade alfabet
function evaluasiSkor(nama, skor) {
    const batasMinimal = 75;
    let status = "";
    let grade = "";

    // Sistem percabangan bertingkat (if - else if - else) untuk predikat grade
    if (skor >= 90) {
        grade = "(Grade: A - Istimewa)";
    } else if (skor >= 80) {
        grade = "(Grade: B - Baik)";
    } else if (skor >= 75) {
        grade = "(Grade: C - Cukup)";
    } else {
        grade = "(Grade: D - Kurang)";
    }

    // Logika percabangan mengecek kelulusan KKM dan menyatukan grade
    if (skor >= batasMinimal) {
        status = "Selamat " + nama + ", Anda dinyatakan LULUS mata pelajaran Pemrograman! " + grade;
    } else {
        status = "Maaf " + nama + ", Anda Belum Lulus KKM. Silakan mengikuti program Remedial. " + grade;
    }

    return status;
}

// Uji coba memanggil fungsi lewat console log
let hasilUji = evaluasiSkor("Rian", 80);
console.log("Hasil Fungsi Test:", hasilUji);

// A. Seleksi elemen DOM masukan dan tombol
const tombolProses = document.getElementById('btn-proses');
const elemenHasil = document.getElementById('box-hasil');

// B. Memasang event listener klik pada tombol proses data nilai
tombolProses.onclick = function() {
    // Mengambil value teks dari input form HTML
    let namaSiswa = document.getElementById('input-nama').value;
    let nilaiSiswa = document.getElementById('input-nilai').value;

    // Validasi sederhana: memastikan kolom input tidak kosong
    if (namaSiswa === "" || nilaiSiswa === "") {
        elemenHasil.innerText = "Peringatan: Mohon isi Nama dan Nilai terlebih dahulu!";
        elemenHasil.style.color = "#dc2626"; // Mengubah warna teks menjadi merah via JS
        elemenHasil.style.borderLeftColor = "#dc2626";
        return; // Menghentikan eksekusi fungsi jika tidak valid
    }

    // Konversi tipe data nilai dari String ke Angka (Number)
    let nilaiAngka = Number(nilaiSiswa);

    // Memanggil fungsi logika yang telah dibuat pada Kegiatan 2
    let kalimatKesimpulan = evaluasiSkor(namaSiswa, nilaiAngka);

    // C. Manipulasi DOM: Memasukkan kalimat hasil ke dalam kotak hasil di halaman web
    elemenHasil.innerText = kalimatKesimpulan;

    // Memberikan sentuhan warna dinamis berdasarkan kelulusan
    if (nilaiAngka >= 75) {
        elemenHasil.style.color = "#15803d"; // Warna teks hijau
        elemenHasil.style.borderLeftColor = "#15803d";
    } else {
        elemenHasil.style.color = "#b91c1c"; // Warna teks merah maroon
        elemenHasil.style.borderLeftColor = "#b91c1c";
    }
};

// IMPLEMENTASI PERULANGAN LOGIKA (LOOPING)
const tombolLoop = document.getElementById('btn-loop');
const elemenBoxLoop = document.getElementById('box-loop');

tombolLoop.onclick = function() {
    let penampungTeks = "";

    // Logika perulangan mencetak deret angka dari 1 sampai 5
    for (let i = 1; i <= 5; i++) {
        penampungTeks += "Mencetak Baris Angka ke-" + i + "<br>";
    }

    // Manipulasi DOM menyuntikkan teks berupa format HTML tag break
    elemenBoxLoop.innerHTML = penampungTeks;
    elemenBoxLoop.style.fontStyle = "normal";
};

// IMPLEMENTASI DARK MODE TOGGLE
const tombolTema = document.getElementById('btn-togle');

tombolTema.onclick = function() {
    // Menambahkan atau menghapus class 'dark-theme' pada elemen <body> secara bergantian
    document.body.classList.toggle('dark-theme');

    // Memeriksa apakah class 'dark-theme' saat ini sedang aktif atau tidak
    if (document.body.classList.contains('dark-theme')) {
        tombolTema.innerText = "Mode Terang";
        tombolTema.style.backgroundColor = "#e2e8f0";
        tombolTema.style.color = "#1e293b";
    } else {
        tombolTema.innerText = "Mode Gelap";
        tombolTema.style.backgroundColor = "#334155";
        tombolTema.style.color = "#ffffff";
    }
}
