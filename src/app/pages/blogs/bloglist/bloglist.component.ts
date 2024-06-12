import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/service/blog/blog.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {

  blogList:Blog[] =[];
  
  constructor(private httpBlogs:BlogService, private readonly route:Router  ){
    
  }

  ngOnInit(): void {
    this.httpBlogs.getBlog().subscribe((data: Blog[])=>{
      this.blogList = data;
     
    console.log('Blog List:', this.blogList);
    this.blogList.forEach(blog => {
      console.log('Image Object:', blog.image); // Kiểm tra toàn bộ đối tượng image
    });
    })
  }
  reaMoreBLog(id:number){
    this.route.navigate(['/blogdetails',id])
  }

}

