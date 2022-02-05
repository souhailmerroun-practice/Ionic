import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications';

const Home: React.FC = () => {

  const scheduleNotification = () => {
    LocalNotifications.schedule({
      id: 1,
      text: 'Single ILocalNotification',
      //sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
      //data: { secret: key }
    })
    console.log("we have it")
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonButton onClick={scheduleNotification}>Schedule</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
