function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

// console.log(index);
window.onload=function(){

      var lis=$('notice').getElementsByTagName('li') 
      ,pic=$('pic').getElementsByTagName('li'),
      index=0,timer=null;
      for (var i = 0; i < lis.length; i++) 
      {
        lis[i].id=i;
        lis[i].onmouseover=function()
        {
          clearInterval(timer);
          time(this.id);
        }
        lis[i].onmouseleave=function()
        {
          timer=setInterval(autoplay,3000);}
      }
    if (timer) {
      clearInterval(timer);
      timer=null;
    }
    //定时器
      timer=setInterval(autoplay,3000)
    
    function autoplay()
    {
       index++;
       if (index>=lis.length) {index=0;};
       time(index); 
    }
     

    function time(t)
      {
         var txtHeight=-t*500;  
         var foot=$(".pic");

         for (var i = 0; i < lis.length; i++) {
          lis[i].className='';
         }
          lis[t].className="active";
         foot.css("top",txtHeight + 'px');
          index=t;
      }
}
 