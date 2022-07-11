import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private router: Router) {}
  openOffer: boolean = false;
  offerDetails: boolean = false;
  offerClaim: boolean = false;
  randomUserId: number = 0;
  cashback: number = 0;
  point: number = 0;

  get isMobile() {
    return this.checkIsMobile();
  }

  ngOnInit(): void {
    this.randomUserId = this.createRandomDigit(3);
    this.cashback = this.createRandomDigit(4);
    this.point = this.createRandomDigit(4);
    this.addingUserId();
  }

  createRandomDigit(digit: number) {
    let number = Math.floor(Math.random() * 10 ** digit) + 1;
    return number;
  }

  addingUserId() {
    this.router.navigate([], {
      queryParams: {
        uid: this.randomUserId,
      },
    });
  }

  openOfferDetails() {
    this.openOffer = !this.openOffer;
    this.offerDetails = true;
  }

  offerClaimed() {
    this.offerClaim = !this.offerClaim;
    setTimeout(() => {
      this.offerClaim = !this.offerClaim;
      this.close();
      this.openOffer = false;
    }, 2000);
  }

  close() {
    this.offerDetails = false;
    this.openOffer = false;
  }

  checkIsMobile() {
    var isMobile = /iphone|ipod|android|ie|blackberry|fennec/.test(
      navigator.userAgent.toLowerCase()
    );
    return isMobile;
  }
}
