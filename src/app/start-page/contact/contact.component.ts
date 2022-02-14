import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contForm!:FormGroup
  send:boolean=false;
  messageEmail:string='';
  constructor(
    private formBuilder:FormBuilder,
    private _http:HttpClient
  ) { }

  ngOnInit(): void {
    this.contForm=this.formBuilder.group({
        from:['',Validators.required],
        subject:['',Validators.required],
        message:['', Validators.required]
    })
  }

  sendEmail(){
    this._http.post<any>("http://236p122.mars1.mars-hosting.com/api/auth/email",this.contForm.value).subscribe(res=>{
      if(res){
        this.messageEmail='You have successfully sent an email';
        setTimeout(() => {
          this.messageEmail='';
        }, 4000);
        this.contForm.reset();
      }else{
        this.messageEmail='Bad request!!'
       setTimeout(() => {
          this.messageEmail='';
       }, 4000);
        
      }
    },
    err=>{
      console.log(err);
      
    }
    )
  }

}
