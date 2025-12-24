import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
  
  quote = "Tu cuerpo puede hacerlo. Es tu mente la que necesitas convencer.";
}
