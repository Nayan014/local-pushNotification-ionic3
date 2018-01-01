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
      color: '#ff9d00',  // or 'red'
      icon: 'https://icon-icons.com/icons2/1283/PNG/512/1497619898-jd24_85173.png',
      smallIcon: 'res://ic_stat_touch_app',
      at: new Date(new Date().getTime())   //After 5sec Notifaction will appier
    });
  }

}
