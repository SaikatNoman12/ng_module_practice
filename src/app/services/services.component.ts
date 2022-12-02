import { HeaderServiceService } from './../appService/header-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    private _sub:HeaderServiceService
  ) { }

  ngOnInit(): void {

    this._sub.headerShow.next(true);

  }

  products: any = [
    {
      id: '1',
      name: 'Graphics Design',
      inData: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: 'https://gizmosreport.com/wp-content/uploads/2021/11/Graphic-Design.jpg',
      router: 'graphics'
    },
    {
      id: '2',
      name: 'UI/UX Design',
      inData: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: 'https://aufaitux.com/wp-content/uploads/2020/05/UIUX-designing-1.jpg',
      router: 'uiux'
    },
    {
      id: '3',
      name: 'Video Editor',
      inData: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: 'https://cdn.pixabay.com/photo/2022/02/23/09/23/video-editing-7030355__340.jpg',
      router: 'video'
    },
    {
      id: '4',
      name: 'VFX',
      inData: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      img: 'https://img.freepik.com/premium-vector/vfx-letters-vector-logo-design_116137-1280.jpg',
      router: 'vfx'
    },
  ];

}
