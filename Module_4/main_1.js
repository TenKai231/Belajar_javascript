function Myfunc(...name){
    console.log(name.length);
    console.log('name', name);
}

Myfunc('Rama', 'Wahyu', 'Aras');



const favorties = ['Nasi Goreng', 'Mie Goreng', 'Sate Ayam'];

const [frist, second, ...rest] = favorties;

console.log(frist)
console.log(second)
console.log(rest)





const employees = [
  {
    name: 'Fulan',
    email: 'fulan@dicoding.com',
    joinYear: 2020,
  },
];

function addEmployee(name, email, joinYear) {
  
  
    const newEmployee = {
      name: name,
      email: email,
      joinYear: joinYear,
    };
    
    employees.push(newEmployee);
    /**
   * @TODO
   * lengkapi fungsi ini agar dapat menambahkan objek employee baru
   * berdasarkan nilai argumen fungsi dan simpan ke dalam array `employees`
   */
}

console.log('Before add employee', employees);
addEmployee('Rama', 'wahyu', 2021);
console.log('After add employee 1', employees);
addEmployee('Aras', 'aras', 2022);
console.log('After add employee 2', employees);
addEmployee('Dimas', 'dimas', 2023);