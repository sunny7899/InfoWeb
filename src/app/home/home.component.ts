import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  PrintButton = true;
  Imgdata = [{ img: 'portfolio-1.jpg', name: 'Order summary' }, { img: 'portfolio-2.jpg', name: 'Music sound library' },
  { img: 'portfolio-3.jpg', name: 'Huddle community' }, { img: 'portfolio-4.jpg', name: 'Tip calculator' },
  { img: 'portfolio-5.jpg', name: 'NFT card' }, { img: 'portfolio-6.jpg', name: 'AI tools' },
  { img: 'portfolio-7.png', name: 'Simple login app' }, { img: 'portfolio-8.jpg', name: 'entertainment web app' }];

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
