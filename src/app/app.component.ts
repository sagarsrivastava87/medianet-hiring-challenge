import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { WebsocketService } from './websocket.service';
import { MedianetsocketService } from './medianetsocket.service';
import { ISubscription } from "rxjs/Subscription";
import { MomentModule } from 'angular2-moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WebsocketService, MedianetsocketService]
})

export class AppComponent implements OnInit {
  
  
  private subscription: ISubscription;
  JSObject = Object;
  gainingStocks:number = 0; loosingStocks:number = 0; newStocks:number = 0;
  valuedStock = {least:{name:"",price:0},most:{name:"",price:0}};
  stockList = {};
  showPreloader: boolean = false;
  
  
  constructor(private ref:ChangeDetectorRef, public medianetsocket: MedianetsocketService) {}

  ngOnInit(){
    //Core method to generate required table
    this.subscription = this.medianetsocket.stocklist.subscribe(stockresp => {
      let ts = new Date().getTime();
        stockresp.forEach(([key, value]) => {
          if (this.stockList.hasOwnProperty(key)) {
            let cs = this.stockList[key].cs;
            if (this.stockList[key].cv != value) {
              cs = ((this.stockList[key].cv - value) > 0) ? 1 : -1;
            }
            this.stockList[key].cv = value;
            this.stockList[key].cs = cs;
            this.stockList[key].ts = ts;
          } else {
            this.stockList[key] = { cv: value, cs: 0, ts: ts, hx: {} };
          }
        });
        this.computeStats();
        this.ref.detectChanges();
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  //Non-Core method to evaluating creative statistics
  computeStats(){
    let highestVal = -1, lowestVal = -1;
    this.newStocks = this.loosingStocks = this.gainingStocks = 0;
    Object.keys(this.stockList).forEach((key,index)=>{
      if(this.stockList[key].cs==0){
        this.newStocks++;
      }else{
        (this.stockList[key].cs > 0) ? this.gainingStocks++ : this.loosingStocks++;
      }
      if(this.stockList[key].cv > highestVal || highestVal==-1){
        this.valuedStock["most"].name = key;
        highestVal = this.valuedStock["most"].price = this.stockList[key].cv;
      }
      if(this.stockList[key].cv<lowestVal || lowestVal==-1){
        this.valuedStock["least"].name = key;
        lowestVal = this.valuedStock["least"].price = this.stockList[key].cv;
      }
    });
  }
}