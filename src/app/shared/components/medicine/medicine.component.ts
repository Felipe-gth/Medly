/* eslint-disable @angular-eslint/prefer-inject */
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.scss'],
  standalone: false,
})
export class MedicineComponent implements OnInit {

  constructor(private _alertController: AlertController) { }

  ngOnInit() { ; }

  async confirmarExclusao(medicamentoNome: string) {
    const alert = await this._alertController.create({
      header: 'Confirmar Exclusão',
      message: `Tem certeza que deseja excluir o medicamento ${medicamentoNome}?`,
      cssClass: 'alert',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'cancel-btn'
        },
        {
          text: 'Excluir',
          role: 'destructive',
          cssClass: 'delete-btn',
          handler: () => {
            this.excluirMedicamento();
          }
        }
      ]
    });

    await alert.present();
  }

  excluirMedicamento() {
    console.log('Medicamento excluído!');
  }
}
