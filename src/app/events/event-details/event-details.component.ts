import {Component, OnInit} from "@angular/core";
import {EventsService} from "../shared/event.service";
import {ActivatedRoute} from "@angular/router"
@Component({
templateUrl:'event-details.component.html',
  styles: [`
  .container{padding-left: 20px; padding-right: 20px;}
    .event-image{height: 100px;}
  `]
})
export class EventDetailsComponent implements OnInit{
  event:any
  constructor(private eventService: EventsService,private activatedRoute: ActivatedRoute){}
  ngOnInit(){
    this.event = this.eventService.getEvent(+this.activatedRoute.snapshot.params['id'])
  }
}
