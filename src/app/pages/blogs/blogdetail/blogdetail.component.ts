import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/service/blog/blog.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss']
})
export class BlogdetailComponent implements OnInit {
  
  blogId: number  =0;
  detailBlog:Blog[] =[];

  constructor(private getBlog:BlogService, private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.blogId = +params['id'];
      this.getBlog.getBlogById(this.blogId).subscribe(data =>{
        this.detailBlog = [data];
      })
    })
  }


}
