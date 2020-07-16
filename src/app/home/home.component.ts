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
  Imgdata=["portfolio-2.jpg","portfolio-1.jpg","portfolio-1.jpg","portfolio-1.jpg","portfolio-1.jpg",
  "portfolio-1.jpg","portfolio-1.jpg","portfolio-1.jpg","portfolio-1.jpg","portfolio-1.jpg","portfolio-1.jpg","portfolio-1.jpg"
,"portfolio-1.jpg","portfolio-1.jpg","portfolio-1.jpg","portfolio-1.jpg"];

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
