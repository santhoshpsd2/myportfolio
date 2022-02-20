const links = document.querySelectorAll('.link');
const top_div = document.querySelector('.top-div');
const about_div = document.querySelector('.about-div');
const port_div = document.querySelector('.portfolio-div');
const workbtn = document.querySelector('.work');

function linkactive(target){
    links.forEach(link => {
        if(link.getAttribute('data') == target){
            link.classList.add('active');
        }else{
            link.classList.remove('active');
        }
    })
}

function divactive(){

}


links.forEach(link => {
    link.addEventListener('click',(e)=>
    {
        let recdata = e.target.getAttribute('data');
        linkactive(recdata);
        if(recdata == 'home'){
            window.scrollTo(0,0)
        }
        if(recdata == 'about'){
            window.scrollTo(0,top_div.clientHeight);
            if(!about_div.classList.contains('active')){
                about_div.classList.add('active');
            }
        }
        
        if(recdata == 'portfolio'){   
            window.scrollTo(0,top_div.clientHeight + about_div.clientHeight);
            if(!port_div.classList.contains('active')){
                port_div.classList.add('active');
            }
        }

        if(recdata == 'contact'){
            window.scrollTo(0,top_div.clientHeight + about_div.clientHeight + port_div.clientHeight);
        }
    })
})

window.addEventListener('scroll',()=>{
    const {scrollTop,scrollHeight} = document.documentElement;
    let topheight = top_div.clientHeight;
    let aboutheight = about_div.clientHeight;
    let portheight = port_div.clientHeight;
    let second = aboutheight + topheight - 5;
    let third = aboutheight + topheight + portheight;
    if(scrollTop < topheight -50){
        linkactive('home');
    }

    if(scrollTop > topheight - 50 && scrollTop < second - 55){
        linkactive('about');
        if(!about_div.classList.contains('active')){
            about_div.classList.add('active');
        }
    }

    if(scrollTop > second -55 && scrollTop < third -50){
        linkactive('portfolio');
        if(!port_div.classList.contains('active')){
            port_div.classList.add('active');
        }
    }

    if(scrollTop > third -50){
        linkactive('contact');
    }
    
})

workbtn.addEventListener('click',()=>{
    linkactive('portoflio');
    window.scrollTo(0,top_div.clientHeight + about_div.clientHeight);
    if(!port_div.classList.contains('active')){
        port_div.classList.add('active');
    }
})

