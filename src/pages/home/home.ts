import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  AlertController} from 'ionic-angular';

import { LocalNotifications } from '@ionic-native/local-notifications';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private localNotifications: LocalNotifications) {
  }

  scheduleNotification() {
    this.localNotifications.schedule({
      id: 1,
      title: 'Attention',
      text: 'local Notification',
      at: new Date(new Date().getTime() + 5 * 1000)   //After 5sec Notifaction will appier
    });
  }

}
