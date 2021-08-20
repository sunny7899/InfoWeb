import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  PrintButton = true;
  Imgdata = [{ img: 'portfolio-1.jpg', name: 'YourVisit' }, { img: 'portfolio-2.jpg', name: 'Book rental' },
  { img: 'portfolio-3.jpg', name: 'Home Interior Display' }, { img: 'portfolio-4.jpg', name: 'Listen and rate music' },
  { img: 'portfolio-5.jpg', name: 'pocket doctor' }, { img: 'portfolio-6.jpg', name: 'studypal' },
  { img: 'portfolio-7.jpg', name: 'photography' }, { img: 'portfolio-8.jpg', name: 'ERP and POS' }];

  ngOnInit() {
  }

  showimg(j) {
    const modal = document.getElementById('myModal');
    const modalImg = <HTMLImageElement>document.getElementById('img01');
    const captionText = document.getElementById('caption');
    modal.style.display = 'block';
    modalImg.src = '../../assets/img/' + j.img;
  }

  hidepreviewpop() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }
}
