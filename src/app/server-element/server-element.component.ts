import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, OnInit, Input, ViewEncapsulation, SimpleChange, ViewChild, ElementRef, ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit{

  @Input('srvElement') element : { type : string, name :string, content : string };
  @Input() name:string;
  @ViewChild('heading') headder: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() { 
    console.log('Constructore runs');
  }

  ngOnChanges(changes: SimpleChange) {
    console.log('ngOnChnages  runs');
    console.log(changes);

  }
  ngOnInit() {

    console.log('ngOnInit  runs');
    console.log(this.headder.nativeElement.textContent);
    console.log('Text Content of Paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck(){
    console.log("ngDoChekc Claeed")
  }

  ngAfterContentInit(){
    console.log('ngAferContentInit')
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChcked")
  }
  
  ngAfterViewInit(){
    console.log("ngAfterViewInit is caleed");
    console.log('test server' + this.headder.nativeElement.textContent);
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked is called");
  }

  ngOnDestroy(){
    console.log("ngOnDestryoy Claedd")
  }

 

}
