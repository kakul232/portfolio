import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,ViewController,Platform } from 'ionic-angular';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
 
}
  ShowEducation(selectedItem){
  
   let EducationModal = this.modalCtrl.create(Education, { education: selectedItem });
   EducationModal.present();
  }
}

@Component({
  entryComponents:[ ListPage ],
  template: `
<ion-header>
  <ion-toolbar>
    <ion-title>
      {{result.course}} Details
    </ion-title>
    <ion-buttons start>
      <button ion-button (click)="dismiss()">
        <span ion-text color="primary" showWhen="ios">Cancel</span>
        <ion-icon name="md-close" showWhen="android, windows"></ion-icon>
      </button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-item>
    <table>
    <tr>
      <th>Board</th>
      <th>Result</th>
    </tr>
    <tr>
      <td>{{result.board}}</td>
      <td>{{result.Result}}</td>
    </tr>
    </table>
  </ion-item>
</ion-content>
`

})
export class Education {
  result: {course:any,board:any,Result:any};
  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    var results=[{course:'10th',board:'SEBA',Result:'53%'},{course:'12th',board:'AHSEC',Result:'52%'},{course:'B.Tech(IT)',board:'PTU',Result:'68%'}];
    this.result=results[params.get('education')];

    console.log(this.result);

    
  }

   dismiss() {
    this.viewCtrl.dismiss();
  }

}



