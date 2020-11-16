import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  setFlag(){
    let inner = document.getElementById('inner');
    inner.style.transition='3s ease-out';
    inner.style.opacity='0';
    let img  = document.getElementById('img');
    img.style.transition='3s ease-out';
    img.style.transform="scale(5)"
    img.style.opacity='0';
    let ca= document.getElementById('ca');
    ca.style.transition='3s ease-out';
    ca.style.opacity='0';
    let we= document.getElementById('wel');
    we.style.transition='3s ease-out';
    setTimeout(()=>{      
    we.style.opacity='1';   
    },3000);
    let outer = document.getElementById('outer');
    outer.style.transition='3s';
    setTimeout(()=>{       
      document.getElementById('outerRobo').style.opacity='1';
      document.getElementById('outerRobo').style.top='2%';
      document.getElementById('outer').style.border='2px dashed blue';
      },3000);
      setTimeout(()=>{  
        this.rotate(3);
       },5000)
  }

  rotate(deg){
    document.getElementById('outer').style.transform='rotate('+deg+"deg"+')';
      setTimeout(()=>{this.rotate(3+deg)},1000)
    }
}

/* Blue border transitions to dashed border
  
  * `Click above` text fades out
  
  * `Welcome` text fades in
  * At the end of the animation above, the blue dashed border should begin rotating indefinitely
  */