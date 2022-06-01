import { Storage, Drivers } from '@ionic/storage';
// Inicializamos el storage para el almacenamiento de Ionic
export const storage = new Storage({
  name: '__financeApp-V1.0',
  driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
});
