import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  closeResult: string;
  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['todos']);

  }

  
 
}
