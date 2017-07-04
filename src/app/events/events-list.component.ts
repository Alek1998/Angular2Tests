import {Component, OnInit} from '@angular/core'
import {EventsService} from "./shared/event.service";
import {ToastrService} from "./common/toastr.service";
import {ActivatedRoute} from "@angular/router";
import {rootRoute} from "@angular/router/src/router_module";


@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular 2 Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit{
  events: any
  constructor(private eventService: EventsService, private toastrService: ToastrService,
  private route: ActivatedRoute){}

  ngOnInit(){
    this.events = this.route.snapshot.data['events']
  }
  handleThumbnailClick(eventName){
    this.toastrService.success(eventName)
}

}
