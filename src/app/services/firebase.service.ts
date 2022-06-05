import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(public firestore: AngularFirestore) {}

  login<>(data: tipo, enlace: string) {
    const ref = this.firestore.collection<>(enlace);
    return ref.add(data);
  }
}
