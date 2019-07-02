import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  template: `
   <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}}</div>
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">Time: {{event.time}}
       <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
       <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
       <span *ngSwitchDefault>(Normal Start)</span>
     </div>
    <div>Price: \${{event.price}}</div>eddddsdas
    <div [hidden]="!event?.location">
      <span>Location: {{event?.location?.address}}</span>
      <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
    </div>
     <div *ngIf="event?.onlineUrl">
       <span>Online URL: {{ event.onlineUrl }}</span>
     </div>
  </div>
  `,
  styles: [`
  .green { color: #003300 !important; }
  .bold { font-weight: bold; }
  .thumbnail { min-height: 210px; }
  .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})

export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();


  getStartTimeClass() {
    if (this.event && this.event.time === '8:00 am') {
      return ['green', 'bold'];
    }
    return [];
  }
}
