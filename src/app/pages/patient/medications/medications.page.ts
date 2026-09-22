import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.page.html',
  styleUrls: ['./medications.page.scss'],
  standalone: false,
})
export class MedicationsPage implements OnInit {

  // Enquanto o cartão usa dados estáticos, esta lista controla se há medicamentos
  // para exibir. Ela será substituída pela fonte de dados da aplicação.
  medicines: string[] = ['Dipirona'];

  constructor() { }

  ngOnInit() { ; }

}
