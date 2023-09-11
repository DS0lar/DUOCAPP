import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { QrScannerPageRoutingModule } from './qr-scanner-routing.module';
import { QrScannerPage } from './qr-scanner.page';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx'; // Importa el servicio aquí

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrScannerPageRoutingModule
  ],
  declarations: [QrScannerPage],
  providers: [BarcodeScanner] // Agrega el servicio aquí
})
export class QrScannerPageModule {}
