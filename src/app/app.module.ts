import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { PustiGunPage } from '../pages/pusti-gun/pusti-gun';
import { KhabarPaniPage } from '../pages/khabar-pani/khabar-pani';
import { CalorieCalcPage } from '../pages/calorie-calc/calorie-calc';
import { JiggashaPage } from '../pages/jiggasha/jiggasha';

import { CabbagePage } from '../pages/cabbage/cabbage';
import { GuavaPage } from '../pages/guava/guava';
import { CauliflowerPage } from '../pages/cauliflower/cauliflower';
import { PotatoPage } from '../pages/potato/potato';
import { PumpkinPage } from '../pages/pumpkin/pumpkin';

import { RadishPage } from '../pages/radish/radish';
import { EggplantPage } from '../pages/eggplant/eggplant';
import { CarrotPage } from '../pages/carrot/carrot';
import { TomattoPage } from '../pages/tomatto/tomatto';
import { CucumberPage } from '../pages/cucumber/cucumber';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

    PustiGunPage,
    KhabarPaniPage,
    CalorieCalcPage,
    JiggashaPage,

    CabbagePage,
    GuavaPage,
    CauliflowerPage,
    PotatoPage,
    PumpkinPage,

    RadishPage,
    EggplantPage,
    CarrotPage,
    TomattoPage,
    CucumberPage,
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      tabsPlacement: 'top',
      platforms: {
        android: {
          tabsPlacement: 'top',
        },
      }})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,

    PustiGunPage,
    CalorieCalcPage,
    KhabarPaniPage,
    JiggashaPage,

    CabbagePage,
    GuavaPage,
    CauliflowerPage,
    PotatoPage,
    PumpkinPage,

    RadishPage,
    EggplantPage,
    CarrotPage,
    TomattoPage,
    CucumberPage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
