import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Imgdata=[ "MH1001-min.jpg",
    "MH1002-min.jpg",
     "MH1003-min.jpg",
     'MH1004-min.jpg',
    'MH1005-min.jpg',
    'MH1006-min.jpg',
     'MH1007-min.jpg',
    'MH1008-min.jpg',
   'MH1009-min.jpg',
    'MH1010-min.jpg',
     'MH1011-min.jpg',
    'MH1012-min.jpg',
     'MH1013-min.jpg',
     'MH1014-min.jpg',
    'MH1015-min.jpg',
    'MH1016-min.jpg'];
    Imgdata2=[ 'MH2001 Ant.-min.jpg',
      'Mh2001 SS-min.jpg',
      'MH2002 Ant.-min.jpg',
       'MH2003 BS-min.jpg', 
       'MH2003 SS-min.jpg',
       'MH2004 Ant.-min.jpg'];
  showimg(j){
    var modal = document.getElementById('myModal');
    var modalImg = <HTMLImageElement>document.getElementById("img01");
    var captionText = document.getElementById("caption");
      modal.style.display = "block";
      modalImg.src = '../../assets/img/'+j;
  }
 
  hidepreviewpop(){
    var modal = document.getElementById('myModal');
      modal.style.display = "none";
  }
}
