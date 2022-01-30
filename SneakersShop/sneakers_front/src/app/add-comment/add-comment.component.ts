import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommentClass } from '../model/CommentClass';
import { AlertServiceService } from '../services/alert-service.service';
import { CommentsService } from '../services/comments.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  commentForm!: FormGroup;
  loggedUserName: string = localStorage.getItem('token') as string;
  comment = new CommentClass();

  constructor(private router: Router,
              private userAlert: AlertServiceService,
              private commentService: CommentsService) { }


  ngOnInit(): void {
    this.commentForm = new FormGroup(
      {
        commInp: new FormControl(null, [Validators.required, Validators.minLength(10)])
      });
  }

  onSubComm()
  {
    this.mapComment();
    this.commentService.listComment(this.comment);
    this.router.navigate(['/discussions']);
    this.userAlert.successf("Comment added successfully!");
  }

  mapComment(): void
  {
    this.comment.Id = this.getMyCommId();
    this.comment.Name = this.loggedUserName;
    this.comment.Date = new Date().toString();
    this.comment.Comm = this.commInp.value;
  }

  getMyCommId()
  {
    if(localStorage.getItem('CMID'))
    {
      localStorage.setItem('CMID', String(Number(localStorage.getItem('CMID'))+1));
      return Number(localStorage.getItem('CMID'));
    }
    else
    {
      localStorage.setItem('CMID','1');
      return Number(localStorage.getItem('CMID'));
    }
  }


  //Get:

  get commInp()
  {

    return this.commentForm.get('commInp') as FormControl;
  }

}
