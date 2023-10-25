const o = prompt("masukkan operator: ");
const a = parseInt(prompt("masukkan angka pertama: "));
const b = parseInt(prompt("masukkan angka kedua: "));

switch(o){
    case"+":
        document.write(a+b)
        break;
    case"-":
        document.write(a-b)
        break;
    case"x":
        document.write(a*b)
        break;
    case":":
        document.write(a/b)
        break;
    default:
        document.write("Anda salah dalam mengimput")
}

document.write("<p>Thanks for your hardwork</p>")