


let imgBox = document.querySelector("#imgBox");

let qrImage= document.querySelector("#qrimage");
let qrtext =document.querySelector("#qrtext");

function GeneateQR()
{
    if(qrtext.value.length >0)
    {
    qrImage.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +qrtext.value;
    imgBox.classList.add("show-img");
    
    }
    else{
        qrtext.classList.add('error');
        setTimeout(()=>
        {
            qrtext.classList.remove('error');
        },1000);
    }
}