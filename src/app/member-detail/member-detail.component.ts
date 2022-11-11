import { Component, OnInit } from '@angular/core';
import { MemberDetailService } from '../member-detail.service'
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';

import { MemberTaskDetail  } from '../member-task-detail'

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})

export class MemberDetailComponent implements OnInit {

  frmMember: FormGroup;
  taskDetail: MemberTaskDetail[] = [];

  constructor(public memberService:MemberDetailService,public formBuilder: FormBuilder) { 
    this.frmMember = this.formBuilder.group({
      memberId: ['', [Validators.required]]
    }) 
  }

  ngOnInit(): void {   
    this.frmMember = this.formBuilder.group({
      memberId: ['', [Validators.required]]
    })     
  } 

  get f(){
    return this.frmMember.controls;
  }

  getMemberDetail()
  {        
    if(this.frmMember.invalid)
    {
      this.taskDetail=[];
      return ;
    }
    this.memberService.getTaskDetail(this.frmMember.value.memberId).subscribe((result : MemberTaskDetail[])=>{      
      this.taskDetail=result;
      console.log(this.taskDetail);
    });
  }
  

}
