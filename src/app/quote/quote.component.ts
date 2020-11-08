import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[]=[
    new Quote(1, "What, so everyone’s supposed to sleep every single night now?", "Dr. Rick Sanchez","Brian Kennedy",new Date(8, 11, 2020)),
    new Quote(2, "Perception is the enemy of perfectly adequate.", "Saul Goodman","Brian Kennedy",new Date(8, 11, 2020)),
    new Quote(2, "Whatever you do in this life, it’s not legendary unless your friends are there to see it.","Barney Stinson","Brian Kennedy",new Date(2019, 7, 23)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isDelete, index){
    if(isDelete){
      let ToBeDeleted = confirm(`You really wanna delete this quote?`);

      if (ToBeDeleted){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    let quoteLength= this.quotes.length;
    quote.id= quoteLength+1;
    quote.completeDate = new Date(quote.completeDate);
    this.quotes.push(quote);
  }
  min:number
  max:number
  i:number

  addQuote(emittedQuote){
    this.quotes.push(emittedQuote)
  }

  quoteLike(index){
      this.quotes[index].upvote+=1;
  }
  quoteUnlike(index){
    this.quotes[index].downvote+=1;
  }

  highestUpvote(){
    this.min = 0
    this.max = 0

    for(this.i=0 ; this.i < this.quotes.length; this.i++) {
      this.min = this.quotes[this.i].upvote;
      if(this.min > this.max){this.max= this.min}
    }
    return  this.max
  }
  constructor() { }

  ngOnInit() {
  }

}