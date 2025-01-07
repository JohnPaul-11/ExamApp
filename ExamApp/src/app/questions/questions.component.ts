import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-questions',
  standalone: true,  
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
  imports: [CommonModule], 
})
export class QuestionsComponent {
  questions = [
    { title: '1. How to create reactive forms?', answer: 'To create reactive forms, import the ReactiveFormsModule and use the FormBuilder class to define form controls.' },
    { title: '2. How to add built-in validation for email in reactive forms?', answer: 'Use the Validators.email along with Validators.required when defining form controls.' },
    { title: '3. How to add built-in validation for required fields in reactive forms?', answer: 'Use Validators.required in the form control definition.' },
    { title: '4. How to add regex validation for reactive forms?', answer: 'Use Validators.pattern() with the desired regex.' },
    { title: '5. How to generate routing?', answer: 'Run ng generate module app-routing --flat --module=app to generate routing module.' },
    { title: '6. How to configure routes with parameters?', answer: 'Use a route path with a parameter, e.g., path: "user/:id", and retrieve the parameter using ActivatedRoute.' },
    { title: '7. What is DebounceTime in RxJS?', answer: 'debounceTime delays values emitted by the source Observable by the specified time.' },
    { title: '8. What is pipe operator?', answer: 'The pipe operator allows chaining multiple RxJS operators.' },
    { title: '9. What is distinctUntilChanged operator?', answer: 'distinctUntilChanged prevents emitting the same value consecutively.' },
    { title: '10. What is filter operator in RxJS?', answer: 'filter lets you emit only those values that pass a given condition.' }
  ];
}
