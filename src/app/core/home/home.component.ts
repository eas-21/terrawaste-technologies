import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import emailjs from '@emailjs/browser';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  form: FormGroup = this.fb.group({
    from_name:'',
    from_email:'',
    from_phone:'',
    subject:'',
    message:''  
  })
  constructor(private router: Router,private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  goto(routePage: string) {
    this.router.navigateByUrl(routePage);
  }
  async send(){
    emailjs.init('D5Mgqxw8EFkkGA4PA');
    let response= await emailjs.send("service_7z2fyw1","template_xkfeuyk",{
      from_name: this.form.value.from_name,
      from_email:this.form.value.from_email,
      from_phone:this.form.value.from_phone,
      to_name:this.form.value.to_name,
      subject:this.form.value.subject,
      message: this.form.value.message,
      reply_to: "jairameshiyya@gmail.com",
      });
      console.log("value",response)
     alert("Message sent succesfully");
     this.form.reset();
     this.router.navigateByUrl('');
    }

}

