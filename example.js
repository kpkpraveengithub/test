var buffer3 = new Buffer('Tutoriasl Pointsfnv');
var buffer1 = new Buffer('ABCDEFGH');
var buffer4 = new Buffer('ABC');
var buffer2 = buffer3.slice(0,5);
console.log(buffer2.toString());
var result = buffer4.compare(buffer1);

if(result < 0) {
   console.log(buffer4 +" comes before " + buffer1);
}
else if(result == 0){
   console.log(buffer1 +" is same as " + buffer4);
}
else {
   console.log(buffer1 +" comes after " + buffer4);
}
