import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
form: FormGroup = this.fb.group({
  from_name:'',
  from_email:'',
  subject:'',
  message:''  
})
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  async send(){
    emailjs.init('D5Mgqxw8EFkkGA4PA');
    let response= await emailjs.send("service_7z2fyw1","template_xkfeuyk",{
      from_name: this.form.value.from_name,
      from_email:this.form.value.from_email,
      to_name:this.form.value.to_name,
      subject:this.form.value.subject,
      message: this.form.value.message,
      reply_to: "jairameshiyya@gmail.com",
      });
     alert("Message sent successfully");
     this.form.reset();
    }
}
