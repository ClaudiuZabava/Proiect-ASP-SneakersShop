import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IComment } from '../model/IComment.interface';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-discussions',
  templateUrl: './discussions.component.html',
  styleUrls: ['./discussions.component.scss']
})
export class DiscussionsComponent implements OnInit {

  Comments!:IComment[];

  constructor(private commService: CommentsService,
              private router: Router) { }

  ngOnInit(): void {
    this.commService.getAllComments().subscribe(
      data=>
      {
        this.Comments=data;
      });
  }

  goType()
  {
    this.router.navigate(['/add-comment']);
  }

}
