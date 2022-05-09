var aes256=require("aes256");
var key="my passpharse";


function decrypt(encryptedPlainText){
    var decryptedPlainText=aes256.decrypt(key,encryptedPlainText);
    return decryptedPlainText;
}
function encrypt(PlainText){
    var encryptedPlainText=aes256.encrypt(key,PlainText);
    return encryptedPlainText;

}
module.exports={
    decrypt,
    encrypt
}
