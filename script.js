var btnred=document.getElementById('red');
var btngreen=document.getElementById('green');
var arr=["Are you sure ?","Really sure ?","Think again","Last chance!","Surely not ?","You might regreat this","Give it another thought!","This could be mistake!","Don't be so cold!","Wouldn't reconsider?","Is that your final answer?","You're breaking my heart","Please click yes🥹"];
var img1=document.getElementById('img1');
var img2=document.getElementById('img2');
var w = window.innerWidth;

let i=0;
btnred.addEventListener('click',()=>{
    if(i<arr.length){
        btnred.textContent=arr[i++];
    }
    if(w>600){
        btngreen.style.fontSize=i*1+'rem';
    }else{
        btngreen.style.fontSize=i*0.5+'rem';
    }
    
});
btngreen.addEventListener('click',()=>{
    document.getElementById('text').innerHTML='Hooray!😍, Yippee!🥰, Yahoo!🤪'
    document.getElementById('btn-sec').style.display='none';
    img1.style.display='none'
    img2.style.display='block'
})