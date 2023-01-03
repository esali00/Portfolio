import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})

export class ContactMeComponent implements OnInit {
  @ViewChild('myForm') myForm: ElementRef;
  @ViewChild('nameField') nameField: ElementRef;
  @ViewChild('emailField') emailField: ElementRef;
  @ViewChild('messageField') messageField: ElementRef;
  @ViewChild('formButton') formButton: ElementRef;
  

  constructor(public viewportscroller: ViewportScroller) { }

  ngOnInit(): void {
    this.scrollToTop()
  }

  async sendMail() {
    // action="https://emir-salihovic.developerakademie.net/send_mail/send_mail.php"
    console.log("Sending mail", this.myForm);

    let nameField = this.nameField.nativeElement
    let emailField = this.emailField.nativeElement
    let messageField = this.messageField.nativeElement
    let formButton = this.formButton.nativeElement


    nameField.disabled = true
    emailField.disabled = true
    messageField.disabled = true
    formButton.disabled = true

    let fd = new FormData()
    fd.append("name", nameField.value)
    fd.append("email", emailField.value)
    fd.append("message", messageField.value)
    // senden 

    await fetch("https://emir-salihovic.developerakademie.net/send_mail/send_mail.php",
      {
        method: "POST",
        body: fd
      }
    )

    nameField.value = ""
    emailField.value = ""
    messageField.value = ""
    formButton.value = ""

    document.querySelector<HTMLElement>(".email-send").classList.remove("d-none")

    setTimeout(() => {
      document.querySelector<HTMLElement>(".email-send").classList.add("d-none")
    }, 2000)
  }

  scrollToTop() {
    this.viewportscroller.scrollToPosition([0, 0])
  }
 
}

