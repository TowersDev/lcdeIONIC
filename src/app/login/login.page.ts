import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { validateEmail } from '../utils/validations';
import { isEmpty } from 'lodash';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  ionicForm: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public toastController: ToastController,
    public firebaseService: FirebaseService
  ) {
    this.ionicForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit() {}

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
    });
    toast.present();
  }

  submitForm() {
    console.log(this.ionicForm.value.email);

    if (
      isEmpty(this.ionicForm.value.email) ||
      isEmpty(this.ionicForm.value.password)
    ) {
      this.presentToast('Todos los campos son obligatorios');
    } else if (!validateEmail(this.ionicForm.value.email)) {
      this.presentToast('El email no es correcto');
    } else {
      console.log('entra en el else');
      const enlace = this.firebaseService.login(this.ionicForm.value, enlace);
      // firebase
      //   .auth()
      //   .signInWithEmailAndPassword(formData.email, formData.password)
      //   .then(() => {
      //     navigation.navigate('account');
      //   })
      //   .catch(() => {
      //     this.presentToast('Email o contraseña incorrecta');
      //   });
    }
  }
}
