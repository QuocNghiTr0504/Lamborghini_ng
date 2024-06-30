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
  lastBLogItem: Blog | null = null;
  
  constructor(private httpBlogs:BlogService, private readonly route:Router  ){
   
  }

  ngOnInit(): void {
    this.httpBlogs.getBlog().subscribe((data: Blog[])=>{
      this.blogList = data;
      this.lastBLogItem = this.blogList[this.blogList.length - 1];
      
      if(this.blogList.length > 0) {
        this.blogList= this.blogList.slice(0,-1).reverse();
      }  
    })
  }

  reaMoreBLog(id:number){
    this.route.navigate(['/articles',id])
  }

}

