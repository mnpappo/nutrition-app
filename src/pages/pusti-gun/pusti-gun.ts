import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, App, ViewController, AlertController } from 'ionic-angular';

import { Camera, File, Transfer, FilePath } from 'ionic-native';
import {  ActionSheetController, ToastController, Platform, LoadingController, Loading } from 'ionic-angular';

import { MyApp } from '../../app/app.component';

import { CabbagePage } from '../cabbage/cabbage';
import { GuavaPage } from '../guava/guava';
import { CauliflowerPage } from '../cauliflower/cauliflower';
import { PotatoPage } from '../potato/potato';
import { RadishPage } from '../radish/radish';
import { EggplantPage } from '../eggplant/eggplant';
import { CarrotPage } from '../carrot/carrot';
import { TomattoPage } from '../tomatto/tomatto';
import { CucumberPage } from '../cucumber/cucumber';
import { PumpkinPage } from '../pumpkin/pumpkin';

declare var cordova: any;

/*
  Generated class for the PustiGun page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-pusti-gun',
  templateUrl: 'pusti-gun.html',
})

export class PustiGunPage {

  lastImage: string = null;
  data: any;
  veg_name: any;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    public platform: Platform,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    public alertCtrl: AlertController,
  ) {
    this.navCtrl = navCtrl;
  }

  public getName(veg) {
    if(veg == 'guava') {
      return 'পেয়ারা '
    }
    else if(veg == 'pumpkin') {
      return 'মিষ্টি কুমড়া'
    }
    else if(veg == 'cabbage') {
      return 'বাঁধাকপি'
    }
    else if(veg == 'cauliflower') {
      return 'ফুলকপি'
    }
    else if(veg == 'potato') {
      return 'আলু'
    }
    // new
    else if(veg == 'carrot') {
      return 'গাঁজর'
    }
    else if(veg == 'cucumber') {
      return 'শশা'
    }
    else if(veg == 'eggplant') {
      return 'বেগুন'
    }
    else if(veg == 'radish') {
      return 'মূলা'
    }
    else if(veg == 'tomatto') {
      return 'টমেটো'
    }
  }

  public presentPredConfirm(veg) {
    let alert = this.alertCtrl.create({
            title: 'এটা একটি ' + this.getName(veg),
            message: 'এই সবজির পুষ্টি গুন জানতে ওকে চাপুন',

            buttons: [
                {
                  text: 'আবার ছবি তুলুন',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                },
                {
                  text: 'ওকে',
                  handler: () => {
                    console.log('Ok clicked');
                    if (veg == 'guagva') {
                        this.navCtrl.push(GuavaPage);
                    }
                    else if (veg == 'cauliflower') {
                      this.navCtrl.push(CauliflowerPage);
                    }

                    else if (veg == 'pumpkin') {
                      this.navCtrl.push(PumpkinPage);
                    }

                    else if (veg == 'cabbage') {
                      this.navCtrl.push(CabbagePage);
                    }

                    else if (veg == 'potato') {
                      this.navCtrl.push(PotatoPage);
                    }
                    else if (veg == 'radish') {
                      this.navCtrl.push(RadishPage);
                    }
                    else if (veg == 'carrot') {
                      this.navCtrl.push(CarrotPage);
                    }
                    else if (veg == 'cucumber') {
                      this.navCtrl.push(CucumberPage);
                    }
                    else if (veg == 'eggplant') {
                      this.navCtrl.push(EggplantPage);
                    }
                    else if (veg == 'tomatto') {
                      this.navCtrl.push(TomattoPage);
                    }

                  }
                }
              ]
          });
    alert.present();
  }

  ///////////////////
  public takePicture(sourceType) {
    // Create options for the Camera Dialog
    var options = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: true,
      correctOrientation: false,
      targetWidth: 128,
      targetHeight: 128,
    };

    // Get the data of an image
    Camera.getPicture(options).then((imagePath) => {
      // Special handling for Android library
      if (this.platform.is('android') && sourceType === Camera.PictureSourceType.PHOTOLIBRARY) {
        FilePath.resolveNativePath(imagePath)
        .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
          this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    }, (err) => {
      this.presentToast('Error while selecting image.');
    });

  }


  public presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Image Source',
      buttons: [
        {
          text: 'গ্যালারি',
          handler: () => {
            this.takePicture(Camera.PictureSourceType.PHOTOLIBRARY);
          }
        },
        {
          text: 'নুতন ছবি তুলুন',
          handler: () => {
            this.takePicture(Camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'বাদ দিন',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  // Create a new name for the image
  private createFileName() {
    var d = new Date(),
    n = d.getTime(),
    newFileName =  n + ".png";
    return newFileName;
  }

  // Copy the image to a local folder
  private copyFileToLocalDir(namePath, currentName, newFileName) {
    File.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(success => {
      this.lastImage = newFileName;
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }

  private presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1500,
      position: 'top'
    });
    toast.present();
  }

  // Always get the accurate path to your apps folder
  public pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      return cordova.file.dataDirectory + img;
    }
  }


  public uploadImage() {
    // Destination URL
    var api_url = "http://192.168.0.100:8000/api/photo/";

    // File for Upload
    var targetPath = this.pathForImage(this.lastImage);

    // File name only
    var filename = this.lastImage;

    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params : {'fileName': filename}
    };

    const fileTransfer = new Transfer();

    this.loading = this.loadingCtrl.create({
      content: 'অপেক্ষা করুন...',
    });
    this.loading.present();


    // Use the FileTransfer to upload the image
    fileTransfer.upload(targetPath, api_url, options).then(res => {
      //success
      this.loading.dismissAll()
      this.presentToast('Image succesfully uploaded.');
      this.data = res;

      this.veg_name = JSON.parse(this.data.response).veg_name;
      this.presentPredConfirm(this.veg_name);

      console.log(this.veg_name);

    }, err => {
      this.loading.dismissAll()
      this.presentToast('Error while uploading file.');
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PustiGunPage');
  }

}
