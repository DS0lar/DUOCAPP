import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';


@Component({
  selector: 'app-qr-scanner',
  templateUrl: './qr-scanner.page.html',
  styleUrls: ['./qr-scanner.page.scss'],
})
export class QrScannerPage implements OnInit {
  usuario: string = '';

  datoscaneado: { text: string } = { text: '' }; // Suponiendo que "text" es una cadena


  constructor(private barcodeScanner: BarcodeScanner) { 
    
  }
  LeerCode() {
    this.barcodeScanner.scan().then(barcodeData => {
        this.datoscaneado = barcodeData;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  ngOnInit() {
  }

}
