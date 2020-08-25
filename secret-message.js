const {hash} = window.location; //deconstruct the hash from our object

const message = atob(hash.replace("#",''));//decodes back message from base64

if(message){
    document.querySelector("#message-form").classList.add('hide');
    document.querySelector("#message-show").classList.remove('hide');
    document.querySelector("h1").innerHTML = message;
}
document.querySelector('form').addEventListener('submit', event =>{
    event.preventDefault(); //this prevents browser to submit information from form to backend server

    document.querySelector("#message-form").classList.add('hide');
    document.querySelector("#link-form").classList.remove('hide');
    const input = document.querySelector('#message-input');
    const encrypted = btoa(input.value);

    const linkInput = document.querySelector("#link-input");
    linkInput.value = `${window.location}#${encrypted}`; //${window.location} will retrieve the link to page
    linkInput.select();//this preselects automatically the text
});


//btoa(string) and atob(); - inbuild function in js to do the conversion
//Atob(btoa(string))
//base64 encoding 0-63

//ascii character repres s
//ascii char code 115 (0-127)
//convert to 8 digit binary repres 01110011
//regroup in groups of 6 characters
//Reconvert to base64

//take string and encode it into url

//domain/     path       ?queryString#hash/fragment 
//message.com/index.html/?color=red#value
//query string sends message to backendserver
//hash/fragment is only concerned to the browser- not relevant to server, but to browser

//deploy application in order to be used not only localy
//free service now with node js