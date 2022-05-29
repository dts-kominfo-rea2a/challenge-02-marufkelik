// ! JANGAN DIMODIFIKASI
/*
  Data Array Object Pegawai
  [
    {
      "id": 1,
      "namaDepan": "Edyth",
      "namaBelakang": "Roberts",
      "jenisKelamin": "M"
    },
    ...
  ]
*/
const arrayObjectPegawai = require("./data-customer.json");

function lakukanLooping(arrPegawai) {
  // ! JANGAN DIMODIFIKASI
  let dataYangAkanDilooping = arrPegawai;

  /*
    TODO 1: Buatlah sebuah variabel bernama "hasilLooping" 
      yang berisi gabungan nama depan dan belakang dari masing masing pegawai

      Contoh: ["Aisyah Nirmala", "Mansur Faisal", ...]
  */
  let hasilLooping = [];
  // console.log(arrPegawai[0].namaDepan);
  // console.log(arrPegawai.length);
  for (i = 0; i < arrPegawai.length; i++) {
      // console.log(arrPegawai[i].namaDepan + arrPegawai[i].namaBelakang);
      // let hasilLooping = (arrPegawai[i].namaDepan + arrPegawai[i].namaBelakang);
      hasilLooping.push(arrPegawai[i].namaDepan + " "+ arrPegawai[i].namaBelakang);
  };
  /*
    TODO 2: Buatlah sebuah variabel bernama "jumlahPria"
      yang berisi jumlah pria dari masing masing pegawai
  */

  let datapria = [];

  for (i = 0; i < arrPegawai.length; i++) {
    if (arrPegawai[i].jenisKelamin === "M") {
    datapria.push(arrPegawai[i].namaDepan + arrPegawai[i].namaBelakang);}
  }
  let jumlahPria = datapria.length;

  /*
    TODO 3: Buatlah sebuah variabel bernama "jumlahWanita"
      yang berisi jumlah wanita dari masing masing pegawai
  */
  let dataWanita = [];

  for (i = 0; i < arrPegawai.length; i++) {
    if (arrPegawai[i].jenisKelamin === "F") {
      dataWanita.push(arrPegawai[i].namaDepan + arrPegawai[i].namaBelakang);}
  }
  let jumlahWanita = dataWanita.length;
  /*
    TODO 4: Buatlah sebuah variabel bernama "komentar"
      yang akan mengomentari apakah lebih banyak Pria atau Wanita
      
      Apabila Pria lebih banyak dari Wanita, maka komentar akan berisi:
        "Jumlah Pria lebih banyak dari Wanita"
      Apabila Wanita lebih banyak dari Pria, maka komentar akan berisi:
        "Jumlah Wanita lebih banyak dari Pria"
      Apabila imbang, maka komentar akan berisi:
        "Jumlah Pria dan Wanita berimbang"
  */
let komentar = null;

switch (komentar) {
  case (jumlahPria > jumlahWanita): "Jumlah Pria lebih banyak dari Wanita"; break;
  case (jumlahPria < jumlahWanita): "Jumlah Wanita lebih banyak dari Pria"; break;
  default:"Jumlah Pria dan Wanita berimbang";
}

  // ! JANGAN DIMODIFIKASI
  return {
    hasilLooping,
    jumlahPria,
    jumlahWanita,
    komentar,
  };
}

function main(data) {
  const hasil = lakukanLooping(data || arrayObjectPegawai);

  console.log(hasil.hasilLooping);
  console.log(hasil.jumlahPria);
  console.log(hasil.jumlahWanita);

  return hasil;
}

main(arrayObjectPegawai);

module.exports = main;
