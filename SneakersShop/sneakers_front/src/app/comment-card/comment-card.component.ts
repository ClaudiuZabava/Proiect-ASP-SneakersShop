import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IComment } from '../model/IComment.interface';

@Component({
  selector: 'app-comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {

  @Input() comment!: IComment;

  loggedUserName!: string;
  

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

}
