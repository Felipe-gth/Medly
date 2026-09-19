import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss'],
  standalone: false,
})
export class MedicineComponent  implements OnInit {

  selectedDay: boolean = true;
  
  constructor() { }

  ngOnInit() { ; }

}
