import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/service/blog/blog.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {

  blogList:Blog[] =[];
  
  constructor(private httpBlogs:BlogService ){
    
  }

  ngOnInit(): void {
    this.httpBlogs.getBlog().subscribe((data: Blog[])=>{
      this.blogList = data;
      console.log(this.blogList)
    })
  }

}

