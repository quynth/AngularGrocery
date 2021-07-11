import { Component} from '@angular/core';

@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html',
    styleUrls: [
        '../assets/css/bootstrap.min.css'
    ]
})

export class GroceryComponent {
    task = "";
    tasks: string[] = [];
    

    onClick(){
        this.tasks.push(this.task);
        this.task = '';
    }


}