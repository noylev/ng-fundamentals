import {Component, Input} from '@angular/core';
import {template} from '@angular/core/src/render3';
import {templateJitUrl} from '@angular/compiler';
import {ISession} from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'

})

export  class SessionListComponent{
    @Input() sessions: ISession[];
}
