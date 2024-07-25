import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {

  detailBlog = [
    { id: 1,  img: "https://img.pikbest.com/ai/illus_our/20230422/367385250965fa9da50195955255a5bd.jpg!w700wp" },
    { id: 2, img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2023/01_23/hero/museo_23_hero_03.jpg" },
    { id: 3, img: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/face_react/museum/2024/01_31_refresh/museum_hero_01.jpg" },
  ];
}
