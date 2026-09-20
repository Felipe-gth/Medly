import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.page.html',
  styleUrls: ['./medicines.page.scss'],
  standalone: false,
})
export class MedicinesPage implements OnInit {

  medicines: string[] = [];

  constructor() { }

  ngOnInit() { ; }

}
