//Ada lima macam bentuk perulaangan di javascript, secara umum, perulangan dibagi menjadi 2.
//Yaitu Counted loop dan uncounted loop
//Perbedaan nya
//1. counted loop merupakan perulangan yang jelas dan sudah tentuh banyak pengulangannya
//2. uncounted loop merupakan pengulangan yang tidak jelas berapa kali harus diulang
//contoh
// function pushup(){
//     //code
    
// }
// for(i = 1 ; i<=10; i++){
    
// }

// let bosan;
// while(bosan == false){
//     pushup()
// }


//macam macam perulangan uncounted loop
// 1.perulangan for
// merupakan perulangan yg termasuk dalam counted loop, karena sudah jelas berapa kali menggulang sebuah perulangan
// for(let i=0; i< 10; i++){
// document.write(`<p>perulangan ini diulang ${i}</p>`)
// }

//2.perulangan foreach
//3.perulangan reapeat

//perulangan WHILE
//perulangan while merupakan perulangan yg termasuk kedalam perulangan uncounted loop namun, perulangan while juga dapat dengan loop dengan memberikan subuah counter didalamnya

//contoh
// var ulang = confirm("Apakah anda mau mengulang");
// var counter = 0;

// while(ulang){
//     var jawab = confirm("Apakah anda mau mengulang");
//     counter++;
//     if(jawab == false){
//         ulang = false
//     }
// }

// document.write("Perulangan sudah dilakaukan sebanyak " + counter + "kali");

// Perulangan Do/while
// Perulangan do/while sama seperti perulangan while

// Perbedaan nya adalah perulangan do/while akan melakukan perulangan sebanyak 1 kali terlebih dahulu lalu memngecek kondisi yg bada didalam kurung while

// do{
//     //code
// }while(kondisi);

// var ulang = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("Apakah anda mau mengulang?");
// }while(ulang);

// document.write("Perulangan yang sudah dilakukan sebanyak " + counter +"kali");


let sum = "";
while(true){
    let value = prompt("Masukkan sebuah huruf",'');
    if(!value) break;

    sum+= value;
}

alert('sum : ' + sum);