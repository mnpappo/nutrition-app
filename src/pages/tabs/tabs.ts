import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import { PustiGunPage } from '../pusti-gun/pusti-gun';
import { KhabarPaniPage } from '../khabar-pani/khabar-pani';
import { CalorieCalcPage } from '../calorie-calc/calorie-calc';
import { JiggashaPage } from '../jiggasha/jiggasha';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = PustiGunPage;
  tab2Root: any = KhabarPaniPage;
  tab3Root: any = CalorieCalcPage;
  tab4Root: any = JiggashaPage;

  constructor() {

  }
}
