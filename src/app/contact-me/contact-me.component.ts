import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})

export class ContactMeComponent implements OnInit {
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('formButton') formButton: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this.scrollToTop()
  }

  async sendMail() {
    // action="https://emir-salihovic.developerakademie.net/send_mail/send_mail.php"
    console.log("Sending mail", this.myForm);

    let nameField = this.nameField.nativeElement
    let messageField = this.messageField.nativeElement
    let formButton = this.formButton.nativeElement

    nameField.disabled = true
    messageField.disabled = true
    formButton.disabled = true

    let fd = new FormData()
    fd.append("name", nameField.value)
    fd.append("message", messageField.value)
    // senden 

    await fetch("https://emir-salihovic.developerakademie.net/send_mail/send_mail.php",
      {
        method: "POST",
        body: fd
      }
    )
  }

  scrollToTop() {
    console.log("scroll")
    window.scrollTo(0, 0);
  }
 
}

