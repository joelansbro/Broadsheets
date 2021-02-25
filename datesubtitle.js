function updateDate(){
    

let d = new Date();

let month = d.getMonth()+1;
let day = d.getDate();

let output = d.getFullYear() + '/' +
    ((''+month).length<2 ? '0' : '') + month + '/' +
    ((''+day).length<2 ? '0' : '') + day;


output = document.getElementById('subtitle').textContent;

}


/* this currently doesnt work, I will think about adding like a jquery plugin or something,
I just want there to be an updated date and time below the heading */