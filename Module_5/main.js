const gajian = true;

console.log('Berjalan jalan di mall');

if (gajian) {
  console.log('Gajian nih, belanja dulu ah');
} else {
  console.log('Gajian kapan ya?');
}

const score = 80;

if (score >= 90) {
    console.log('Nilai A');
}else if (score >= 80) {
    console.log('Nilai B');
}else if (score >= 70) {
    console.log('Nilai C');
}else if (score >= 60) {
    console.log('Nilai D');
}else {
    console.log('Nilai E');
}

const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;
const finalPrice = price - (price * discount);

console.log('Harga akhir:', finalPrice);

switch (score) {
    case 90:
        console.log('Nilai A');
        break;
    case 80:
        console.log('Nilai B');
        break;
    case 70:
        console.log('Nilai C');
        break;
    case 60:
        console.log('Nilai D');
        break;
    default:
        console.log('Nilai E');
}

const day = new Date().getDay();
if (day === 0) {
    console.log('Hari ini adalah hari Minggu');
} else if (day === 1) {
    console.log('Hari ini adalah hari Senin');
} else if (day === 2) {
    console.log('Hari ini adalah hari Selasa');
} else if (day === 3) {
    console.log('Hari ini adalah hari Rabu');
} else if (day === 4) {
    console.log('Hari ini adalah hari Kamis');
} else if (day === 5) {
    console.log('Hari ini adalah hari Jumat');
} else if (day === 6) {
    console.log('Hari ini adalah hari Sabtu');
}   else {
    console.log('Hari tidak valid');
}

