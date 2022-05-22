export class TournmanetView{
  _id:string=undefined;
  name:string=undefined;
  prizes:string[]=undefined;
  currency:string=undefined;
  startTime:string=undefined;  
  startingChips:number=undefined;
  playersPerTable:number=undefined;
  minPlayers:number=undefined;
  maxPlayers:number=undefined;
  blindConfig:BlindConfigView[]=undefined;  
  timeToActSec:number=undefined;  
  statusText:string=undefined;  
  registrations:{guid:string, screenName:string, email:string}[]= [];
  lateRegistrationMin:number=undefined;  
  awardPrizesAfterMinutes:number=undefined;  
  mailchimpSendTimeMin:number=undefined;  
  telegramSendTimeMin:number=undefined;  
  buyIn:string=undefined;  
  housePrize:string=undefined;  
  rebuyForMin:number=undefined;  
  rebuyAmount:string=undefined;  
}
export class BlindConfigView{
  constructor(public smallBlind:number, public bigBlind:number, public timeMin:number) {
  }  
}
