import {Component, OnInit} from '@angular/core';
import { Card } from './models/card.model';
import {CardsService} from "./Service/cards.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cards: Card[] = [];
  card: Card = {
    id: '',
    cardNumber: '',
    cardHolderName: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: ''
  }

  constructor(private service: CardsService) {
  }

  ngOnInit(): void {
    this.getAllCards();

  }

  getAllCards() {
    this.service.GetAllCards().subscribe(response => {
      this.cards = response;
      console.log(response);
    });
  }

  OnSubmit(): void {
    if (this.card.id === '') {
      this.service.addCard(this.card).subscribe(response => {
        this.getAllCards();
        this.card = {
          id: '',
          cardNumber: '',
          cardHolderName: '',
          expiryMonth: '',
          expiryYear: '',
          cvc: ''
        }
      })
    } else {
         this.updateCard(this.card);
    }
  }

  deleteCard(id: string) {
    this.service.DeleteCard(id).subscribe(response => {
      this.getAllCards();
      this.card = {
        id: '',
        cardNumber: '',
        cardHolderName: '',
        expiryMonth: '',
        expiryYear: '',
        cvc: ''
      }
    })
  }

  populateForm(card: Card) {
    this.card = card;
  }

    updateCard(card:Card){
  this.service.UpdateCard(card).subscribe(response=>{
    this.getAllCards();
  })

}
}
