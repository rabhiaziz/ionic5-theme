import { Component, OnInit } from '@angular/core';
import { MenuController, LoadingController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  public onRegisterForm: FormGroup;
  constructor( public menuCtrl: MenuController,
    public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    private router: Router) { }

    ionViewWillEnter() {
      this.menuCtrl.enable(false);
    }
    
    ngOnInit() {
      this.onRegisterForm = this.formBuilder.group({
        'fullName': [null, Validators.compose([
          Validators.required
        ])],
        'email': [null, Validators.compose([
          Validators.required
        ])],
        'password': [null, Validators.compose([
          Validators.required
        ])]
      });
    }

    async signUp() {
      const loader = await this.loadingCtrl.create({
        duration: 2000
      });
  
      loader.present();
      loader.onWillDismiss().then(() => {
        this.router.navigate(['home']);
        //this.navCtrl.navigateRoot('/home-results');
      });
    }

    // // //
  goToLogin() {
    this.router.navigate(['login']);

    //this.navCtrl.navigateRoot('/');
  }
}
