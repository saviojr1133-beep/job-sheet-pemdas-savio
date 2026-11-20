const dataKamus = [
  {
    istilah: "Duelist",
    kategori: "Role",
    arti: "Agent yang bertugas membuka jalan masuk ke site, mencari duel awal, dan menciptakan ruang bagi tim."
  },
  {
    istilah: "Controller",
    kategori: "Role",
    arti: "Agent pengendali area menggunakan smoke atau wall untuk memblokir garis pandang musuh."
  },
  {
    istilah: "Initiator",
    kategori: "Role",
    arti: "Agent pembuka informasi dan pengacau posisi musuh menggunakan flash, recon, atau stun."
  },
  {
    istilah: "Sentinel",
    kategori: "Role",
    arti: "Agent bertahan yang menjaga flank, menahan push musuh, dan mengamankan site."
  },
  {
    istilah: "Eco Round",
    kategori: "Ekonomi",
    arti: "Ronde hemat kredit untuk menabung uang agar bisa membeli senjata dan armor penuh di ronde berikutnya."
  },
  {
    istilah: "Force Buy",
    kategori: "Ekonomi",
    arti: "Membelanjakan hampir seluruh kredit yang ada meskipun ekonomi tim kurang ideal demi memaksakan kemenangan ronde."
  },
  {
    istilah: "Flank",
    kategori: "Strategi",
    arti: "Menyerang atau mengintai posisi musuh dari arah samping atau belakang yang tidak terjaga."
  },
  {
    istilah: "Retake",
    kategori: "Strategi",
    arti: "Upaya merebut kembali site yang sudah dikuasai musuh atau sudah terpasang Spike."
  },
  {
    istilah: "Spike",
    kategori: "Objektif",
    arti: "Perangkat peledak yang dipasang oleh tim Attacker di Site A, B, atau C, dan harus dijinakkan oleh Defender."
  },
  {
    istilah: "Clutch",
    kategori: "Strategi",
    arti: "Situasi saat satu pemain berhasil memenangkan ronde melawan lebih dari satu pemain lawan yang masih hidup."
  }
];

const kamusList = document.getElementById("kamusList");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const themeToggle = document.getElementById("themeToggle");

let kategoriAktif = "Semua";

function tampilkanKamus() {
  const kataKunci = searchInput.value.trim().toLowerCase();

  const hasilFilter = dataKamus.filter((item) => {
    const cocokKategori = kategoriAktif === "Semua" || item.kategori === kategoriAktif;
    const cocokTeks =
      item.istilah.toLowerCase().includes(kataKunci) ||
      item.arti.toLowerCase().includes(kataKunci);
    return cocokKategori && cocokTeks;
  });

  if (hasilFilter.length === 0) {
    kamusList.innerHTML = `<p class="empty-state">Istilah "${searchInput.value}" tidak ditemukan.</p>`;
    return;
  }

  kamusList.innerHTML = hasilFilter
    .map(
      (item) => `
      <article class="card">
        <span class="badge">${item.kategori}</span>
        <h2>${item.istilah}</h2>
        <p>${item.arti}</p>
      </article>
    `
    )
    .join("");
}

searchInput.addEventListener("input", tampilkanKamus);

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    kategoriAktif = btn.dataset.category;
    tampilkanKamus();
  });
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "Mode Gelap";
  } else {
    themeToggle.textContent = "Mode Terang";
  }
});

tampilkanKamus();