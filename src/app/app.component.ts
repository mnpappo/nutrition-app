import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';

import { PustiGunPage } from '../pages/pusti-gun/pusti-gun';
import { KhabarPaniPage } from '../pages/khabar-pani/khabar-pani';
import { CalorieCalcPage } from '../pages/calorie-calc/calorie-calc';
import { JiggashaPage } from '../pages/jiggasha/jiggasha';


import { CabbagePage } from '../cabbage/cabbage';
import { GuavaPage } from '../guava/guava';
import { CauliflowerPage } from '../cauliflower/cauliflower';
import { PotatoPage } from '../potato/potato';
import { PumpkinPage } from '../pumpkin/pumpkin';
import { RadishPage } from '../radish/radish';
import { EggplantPage } from '../eggplant/eggplant';
import { CarrotPage } from '../carrot/carrot';
import { TomattoPage } from '../tomatto/tomatto';
import { CucumberPage } from '../cucumber/cucumber';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
