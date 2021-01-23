import { Component, OnInit } from '@angular/core';
import { Widget, WidgetsService } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.scss'],
})
export class WidgetsComponent implements OnInit {
  selectedWidget: Widget;
  readonly = false;
  widgets: Widget[];

  constructor(private widgetsService: WidgetsService) {}

  ngOnInit() {
    this.getWidgets();
    this.resetCurrentWidget();
  }

  getWidgets() {
    this.widgetsService.all().subscribe((widgets) => (this.widgets = widgets));
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  resetCurrentWidget() {
    this.selectedWidget = { id: null, name: '', description: '' };
  }

  cancel() {
    this.resetCurrentWidget();
  }

  save(widget: Widget) {
    if (!widget.id) {
      this.createWidget(widget);
    } else {
      this.updateWidget(widget);
    }
  }

  createWidget(widget: Widget) {
    if (widget.name.length !== 0) {
      this.widgetsService.create(widget).subscribe((response) => {
        this.getWidgets();
        this.resetCurrentWidget();
      });
    }
  }

  updateWidget(widget: Widget) {
    this.widgetsService.update(widget).subscribe((respoonse) => {
      this.getWidgets();
      this.resetCurrentWidget();
    });
  }

  deleteWidget(widget) {
    this.widgetsService.delete(widget).subscribe((response) => {
      this.getWidgets();
      this.resetCurrentWidget();
    });
  }
}
