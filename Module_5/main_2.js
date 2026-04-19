try {
    console.log('Memulai program');
    throw new Error('Terjadi kesalahan yang tidak terduga');
    console.log('Mengahkhiri program'); 
} catch (err) {
    console.log('karena ada error, blok ini akan di eksekusi'); 
}finally {
    console.log('blok ini akan selalu di eksekusi'); 
}
