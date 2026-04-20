const { readFile, writeFile } = require('fs/promises');
const flowRemoveType = require('flow-remove-types'); 

(async () => {
    try {
        const input = await readFile('./add.js', 'utf-8');
        const output = flowRemoveType(input, {
            pretty : true,
            all: true,
        });
        await writeFile('./output.js', output.toString());
        
        console.log('File add.js berhasil dibuat dengan tipe data dihapus.');
    } catch (error) {
        console.error('Terjadi kesalahan:', error);
    }
    console.log('Proses selesai.');
}
)();