import { Component, OnInit,} from '@angular/core';
import { ZoomMtg } from '@zoomus/websdk';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.css']
})

export class ZoomComponent implements OnInit{

  meetConfig: any;
  signature: any;

  constructor() {
  
  }
  
  ngOnInit(): void {
    this.setConfig();
  }

  setConfig(){
    this.meetConfig={
      apiKey: 'nwpL2AK9RiG_uMufL1FFug',
      apiSecret: 'fag48anGGbOiIAzuP0OwuJY7m6F5f44E4n0E',
      meetingNumber: '82856073683',
      userName: 'Prueba Zoom',
      passWord: '12345',
      leaveUrl: 'http://localhost:4200/zoom/meeting/',
      role: 0
    };

    this.signature = ZoomMtg.generateSignature({
      meetingNumber: this.meetConfig.meetingNumber,
      apiKey: this.meetConfig.apiKey,
      apiSecret: this.meetConfig.apiSecret,
      role: this.meetConfig.role,
      success: (res: any) =>{
        console.log(res.result);
      }
    });

    ZoomMtg.init({
      showMeetingHeader: true,
      disableInvite: true,
      disableCallOut: true,
      disableRecord: true,
      disableJoinAudio: true,
      audioPanelAlwaysOpen: true,
      showPureSharingContent: true,
      isSupportAV: true,
      isSupportChat: true,
      isSupportQA: true,
      isSupportCC: true,
      screenShare: true,
      rwcBackup: '',
      videoDrag: true,
      videoHeader: true,
      isLockBottom: true,
      isSupportNonverbal: true,
      isShowJoiningErrorDialog: true,
      leaveUrl: 'http://localhost:4200/zoom/meeting/',
      success: (res: any) =>{
        ZoomMtg.join({
          meetingNumber: this.meetConfig.meetingNumber,
          userName: this.meetConfig.userName,
          signature: this.signature,
          apiKey: this.meetConfig.apiKey, 
          userEmail: '',
          passWord: this.meetConfig.passWord,
          success: (res:any)=>{
            console.log('Join meeting succes');
          }, error: (res: any) =>{
            console.log(res);
          },
        })
      }, error : (res: any)=>{
        console.log(res);
      }
    });
  }
}
