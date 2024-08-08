import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-section3',
  standalone: true,
  imports: [],
  templateUrl: './card-section3.component.html',
  styleUrl: './card-section3.component.css'
})
export class CardSection3Component {
  @Input() title!: string;
  @Input() imageUrl!: string;
  @Input() date!: string;
}
