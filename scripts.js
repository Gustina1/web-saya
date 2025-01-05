document.getElementById("formTransaksi").addEventListener("submit", function (event) {
  event.preventDefault();
  const namaBarang = document.getElementById("namaBarang").value;
  const jumlah = document.getElementById("jumlah").value;
  const kategori = document.getElementById("kategori").value;

  if (!namaBarang || !jumlah || !kategori) {
    alert("Harap isi semua bidang.");
    return;
  }

  const tbody = document.getElementById("daftarTransaksi");
  const row = document.createElement("tr");

  row.innerHTML = `
        <td>${namaBarang}</td>
        <td>${jumlah}</td>
        <td>${kategori}</td>
    `;

  tbody.appendChild(row);

  document.getElementById("formTransaksi").reset();
});
