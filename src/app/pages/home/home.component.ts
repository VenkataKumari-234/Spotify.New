import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public songCards=[
    {
      thumbnail:
      'https://www.istockphoto.com/photo/bear-skin-state-trail-bridge-gm1388623445-446206770?utm_source=pixabay&utm_medium=affiliate&utm_campaign=SRP_image_sponsored&utm_content=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&utm_term=nature',
      
      title: 'Romantic Songs',
      description: 'Relax and indulge with beautiful piano pieces',
    }

  ]
  ngOnInit(): void {
    
  }

}
