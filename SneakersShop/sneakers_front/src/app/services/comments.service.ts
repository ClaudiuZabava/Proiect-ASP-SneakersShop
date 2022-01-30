import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CommentClass } from '../model/CommentClass';
import { IComment } from '../model/IComment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http:HttpClient) { }

  getAllComments(): Observable<IComment[]>{
    
    return this.http.get('data/comments.json').pipe(
      map( data =>{

        const CommentsArray: Array<IComment> = [];
        const localComms = JSON.parse(localStorage.getItem('newComm') as string);
        if (localComms)
        {
          for (const id in localComms)
          {
            if (localComms.hasOwnProperty(id))
            {
              CommentsArray.push(localComms[id]);
            }
          }
        }
        for (const id in data){
          if (data.hasOwnProperty(id))
          {
            CommentsArray.push(data[id]);
          }
        }
        return CommentsArray;

      })
    );
  }

  listComment(comment: CommentClass)
  {
    let newComm = [comment];
    
    // Adaugam comentariul in local storage.
    if(localStorage.getItem('newComm'))
    {
      newComm = [...JSON.parse(localStorage.getItem('newComm') as string), comment]
    }

      localStorage.setItem('newComm', JSON.stringify(newComm));
  }

}
