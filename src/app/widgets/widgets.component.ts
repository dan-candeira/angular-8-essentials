import { Component, OnInit } from '@angular/core';
import { Widget } from '../shared/widget.model';
import { WidgetsService } from '../shared/widgets.service';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss']
})
export class WidgetsComponent implements OnInit {
  selectedWidget;

  widgets: Widget[];

  constructor(private widgetsService: WidgetsService) { }

  ngOnInit() {
    this.getWidgets();
  }

  getWidgets() {
    this.widgetsService.all()
      .subscribe(widgets => this.widgets = widgets);
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

}
