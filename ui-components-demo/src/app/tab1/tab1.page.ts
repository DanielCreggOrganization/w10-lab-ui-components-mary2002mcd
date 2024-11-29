import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonAvatar, IonItem, IonCard } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonAvatar,IonLabel, IonButton ,IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonItem, IonCard]
})
export class Tab1Page {
  constructor() {}
}
