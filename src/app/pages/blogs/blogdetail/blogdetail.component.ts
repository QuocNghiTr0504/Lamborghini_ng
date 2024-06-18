import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Blog } from 'src/app/models/blog';
import { BlogService } from 'src/app/service/blog/blog.service';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss'],
})
export class BlogdetailComponent implements OnInit {
  blogId: number = 0;
  relatedBlogs: Blog[] = []; 
  detailBlog$: Observable<Blog>| undefined;

  constructor(private http: BlogService, private router: ActivatedRoute, private route:Router) {}

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.blogId = +params['id'];
      this.detailBlog$ = this.http.getBlogById(this.blogId);
      this.detailBlog$.subscribe(data => {
      this.getRelatedBlogs(data.category);
    });
      
    });
  }

  getRelatedBlogs(category: string): void {
    this.http.getBlog().subscribe((data: Blog[]) => {
      this.relatedBlogs = data
        .filter(blog => blog.category === category && blog.id != this.blogId)
        .slice(0,3) 
    });
  }
  ReadMore(id: number){
    this.route.navigate(['/blogdetails',id])
  }
}
