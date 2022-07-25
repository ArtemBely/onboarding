import mongoose, { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
  email: string,
  password: string,
  individual: string;
  title: string;
  salutation: string;
  name: string;
  lastname: string;
  date: Date;
  country: string;
  nationalities: string;
  usPerson: string;
  bornInUs: string;
  greenCard: string;
  possessionGreenCard: string;
  subPresTest: string;
  pepStatus: string;
  pepNameFunc: string;
  alterEmail: string;
  codePhone: string;
  streetNo: string;
  cityState: string;
  mailBox: string;
  resedenceCountry: string;
  postalCode: string;
  domAddress: string;
  corrAddressAsDom: string;
  dataProcessed: string;
  employmentStatus: string;
  university: string;
  faculty: string;
  companyEmplName: string;
  companyLastEmplName: string;
  companyEmplAddress: string;
  companyLastEmplAddress: string;
  companyEmplDate: Date;
  companyLastEmplDate: Date;
  companyEmplCountry: string;
  companyEmplWebsite: string;
  companyEmplCode: string;
  companyEmplProfession: string;
  companyLastEmplProfession: string;
  functionEmpl: string;
  functionLastEmpl: string;
  companyEmpl: string;
  companyEmplTurnover: string;
  selfEmpl: boolean;
  investEarn: boolean;
  saleOfComp: boolean;
  payOff: boolean;
  lotte: boolean;
  finProd: boolean;
  initOffer: boolean;
  gift: boolean;
  rentalProceeds: boolean;
  pensionFunds: boolean;
  salaryIncome: boolean;
  airdrops: boolean;
  saleOfEstate: boolean;
  saleOfValuables: boolean;
  saleOfOther: boolean;
  yearlyIncome1: string;
  yearlyIncome2: string;
  netWealth1: string;
  netWealth2: string;
  currency: string;
  ammount: string;
  bankAndCountry: string;
  noTransfer: boolean;
  btc1: string;
  btc2: string;
  eth1: string;
  eth2: string;
  noTransfer2: boolean;
  declareBeneficial: boolean;
  recieveUpdates: boolean;

  legalEntity: string;
  countryOfCompany: string;
  typeOfCompany: string;
  stockExchange: string;
  noExchangeFile: string;
  entityName: string;
  taxOfID: string;
  countryOfReg: string;
  entityType: string;
  dateOfIncorp: string;
  websiteOfComp: string;
  emplOfCompany: string;
  lineOfCompany: string;
  turnoverCompany: string;
  asAnAuthor: boolean;
  companyRegAddress: string;
  companyRegCity: string;
  companyMailBox: string;
  countryOfCompany2: string;
  postalCompanyCode: string;
  sameCorrespondenceCompany: boolean;
  fiatCompanyCurrency: string;
  ammountOfCompany: string;
  bankOfCompany: string;
  noTransfer3: boolean;
  btcCompany1: string;
  btcCompany2: string;
  ethCompany1: string;
  ethCompany2: string;
  noTransfer4: boolean;
  agreeRecieveCompany: string;
  parties: Array<object>;
  partyName: string;
  partyEmail: string;

  tax: string;
  telephone: string;
  code: string;
}

const userSchema = new Schema <IUser>({
   email: {type: String, required: true},
   password: {type: String, required: true},
   individual:{type: String},
   title:{type: String},
   salutation:{type: String},
   name:{type: String},
   lastname:{type: String},
   date:{type: Date},
   country:{type: String},
   nationalities:{type: String},
   usPerson:{type: String},
   bornInUs:{type: String},
   greenCard:{type: String},
   possessionGreenCard:{type: String},
   subPresTest:{type: String},
   pepStatus:{type: String},
   pepNameFunc:{type: String},
   alterEmail:{type: String},
   codePhone:{type: String},
   streetNo:{type: String},
   cityState:{type: String},
   mailBox:{type: String},
   resedenceCountry:{type: String},
   postalCode: {type: String},
   domAddress: {type: String},
   corrAddressAsDom: {type: String},
   dataProcessed: {type: String},
   employmentStatus: {type: String},
   university: {type: String},
   faculty: {type: String},
   companyEmplName: {type: String},
   companyLastEmplName: {type: String},
   companyEmplAddress: {type: String},
   companyLastEmplAddress: {type: String},
   companyEmplDate: {type: Date},
   companyLastEmplDate: {type: Date},
   companyEmplCountry: {type: String},
   companyEmplWebsite: {type: String},
   companyEmplCode: {type: String},
   companyEmplProfession: {type: String},
   companyLastEmplProfession: {type: String},
   functionEmpl: {type: String},
   functionLastEmpl: {type: String},
   companyEmpl: {type: String},
   companyEmplTurnover: {type: String},
   selfEmpl: {type: Boolean},
   investEarn: {type: Boolean},
   saleOfComp: {type: Boolean},
   payOff: {type: Boolean},
   lotte: {type: Boolean},
   finProd: {type: Boolean},
   initOffer: {type: Boolean},
   gift: {type: Boolean},
   rentalProceeds: {type: Boolean},
   pensionFunds: {type: Boolean},
   salaryIncome: {type: Boolean},
   airdrops: {type: Boolean},
   saleOfEstate: {type: Boolean},
   saleOfValuables: {type: Boolean},
   saleOfOther: {type: Boolean},
   yearlyIncome1: {type: String},
   yearlyIncome2: {type: String},
   netWealth1: {type: String},
   netWealth2: {type: String},
   currency: {type: String},
   ammount: {type: String},
   bankAndCountry: {type: String},
   noTransfer: {type: Boolean},
   btc1: {type: String},
   btc2: {type: String},
   eth1: {type: String},
   eth2: {type: String},
   noTransfer2: {type: Boolean},
   declareBeneficial: {type: Boolean},
   recieveUpdates: {type: Boolean},

   legalEntity:{type: String},
   countryOfCompany: {type: String},
   typeOfCompany: {type: String},
   stockExchange: {type: String},
   entityName: {type: String},
   taxOfID: {type: String},
   countryOfReg: {type: String},
   entityType: {type: String},
   dateOfIncorp: {type: String},
   websiteOfComp: {type: String},
   emplOfCompany: {type: String},
   lineOfCompany: {type: String},
   turnoverCompany: {type: String},
   asAnAuthor: {type: Boolean},
   companyRegAddress: {type: String},
   companyRegCity: {type: String},
   companyMailBox: {type: String},
   countryOfCompany2: {type: String},
   postalCompanyCode: {type: String},
   sameCorrespondenceCompany: {type: Boolean},
   fiatCompanyCurrency: {type: String},
   ammountOfCompany: {type: String},
   bankOfCompany: {type: String},
   noTransfer3: {type: Boolean},
   btcCompany1: {type: String},
   btcCompany2: {type: String},
   ethCompany1: {type: String},
   ethCompany2: {type: String},
   noTransfer4: {type: Boolean},
   agreeRecieveCompany: {type: String},
   parties: {type: Array},
   partyName: {type: String},
   partyEmail: {type: String},

   tax:{type: String},
   telephone:{type: String},
   code: {type: String}
});
export const User = mongoose.model<IUser>("User", userSchema); // --> TS format
//module.exports = mongoose.model('User', userSchema);
export const createUser = function(newUser: any, callback: any) {
bcrypt.genSalt(10, function(err: Error, salt: any) {
    bcrypt.hash(newUser.password, salt, function(err: Error, hash: any) {
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}

export const comparePassword = function(candidatePassword: any, hash: any, callback: any) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}
