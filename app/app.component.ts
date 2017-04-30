import { Component } from '@angular/core';

import { Task } from './model/task'
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: [ 'app.component.css' ]
})
export class AppComponent {
    private tasks: Task[] = [];                                                                                                    // always put private in front of your component properties so nothing can modify the data out side of it
    private currentTask = new Task(null, false);

    addTask() {
        let task = new Task(this.currentTask.content, this.currentTask.completed);
        this.tasks.push(task);
        this.currentTask.content = null;
    }
}