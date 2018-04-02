import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';

const SOCKET_URL = 'ws://stocks.mnet.website';

@Injectable()
export class MedianetsocketService {
  public stocklist:Subject<any>;
  constructor(wsService: WebsocketService) {
    this.stocklist = <Subject<any>>wsService
      .connect(SOCKET_URL)
      .map((response: MessageEvent): any => {
        let data = JSON.parse(response.data);
        return data;
      });
  }
}
