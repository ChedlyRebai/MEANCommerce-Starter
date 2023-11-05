import { Item } from "./item.model";

export class Order {
  _id?:String;
  items?: Item[];
  user?: String;
  total?: Number;
  montant?: Number;
  length?: Number;
  prenom?:String;
  nom?:String;
  ntlf?:Number;
  email?:String;
  pays?:String;
  adresse?:String;
  ville?:String;
  etat?:String;
  code?:Number;
  createdAt?:Date;

}

