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
  selfEmpl: string;
  investEarn: string;
  saleOfComp: string;
  payOff: string;
  lotte: string;
  finProd: string;
  initOffer: string;
  gift: string;
  rentalProceeds: string;
  pensionFunds: string;
  salaryIncome: string;
  airdrops: string;
  saleOfEstate: string;
  saleOfValuables: string;
  saleOfOther: string;
  yearlyIncome1: string;
  yearlyIncome2: string;
  netWealth1: string;
  netWealth2: string;
  currency: string;
  ammount: string;
  bankAndCountry: string;
  noTransfer: string;
  btc1: string;
  btc2: string;
  eth1: string;
  eth2: string;
  noTransfer2: string;
  declareBeneficial: string;
  recieveUpdates: string;

  legalEntity: string;
  countryOfCompany: string;
  typeOfCompany: string;
  stockExchange: string;
  noExchangeFile: string;
  entityName: string;
  taxOfID: string;
  countryOfReg: string;
  entityType: string;
  dateOfIncorp: Date;
  websiteOfComp: string;
  emplOfCompany: string;
  lineOfCompany: string;
  turnoverCompany: string;
  asAnAuthor: string;
  companyRegAddress: string;
  companyRegCity: string;
  companyMailBox: string;
  countryOfCompany2: string;
  postalCompanyCode: string;
  sameCorrespondenceCompany: string;
  fiatCompanyCurrency: string;
  ammountOfCompany: string;
  bankOfCompany: string;
  noTransfer3: string;
  btcCompany1: string;
  btcCompany2: string;
  ethCompany1: string;
  ethCompany2: string;
  noTransfer4: String;
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
   selfEmpl: {type: String},
   investEarn: {type: String},
   saleOfComp: {type: String},
   payOff: {type: String},
   lotte: {type: String},
   finProd: {type: String},
   initOffer: {type: String},
   gift: {type: String},
   rentalProceeds: {type: String},
   pensionFunds: {type: String},
   salaryIncome: {type: String},
   airdrops: {type: String},
   saleOfEstate: {type: String},
   saleOfValuables: {type: String},
   saleOfOther: {type: String},
   yearlyIncome1: {type: String},
   yearlyIncome2: {type: String},
   netWealth1: {type: String},
   netWealth2: {type: String},
   currency: {type: String},
   ammount: {type: String},
   bankAndCountry: {type: String},
   noTransfer: {type: String},
   btc1: {type: String},
   btc2: {type: String},
   eth1: {type: String},
   eth2: {type: String},
   noTransfer2: {type: String},
   declareBeneficial: {type: String},
   recieveUpdates: {type: String},

   legalEntity:{type: String},
   countryOfCompany: {type: String},
   typeOfCompany: {type: String},
   stockExchange: {type: String},
   entityName: {type: String},
   taxOfID: {type: String},
   countryOfReg: {type: String},
   entityType: {type: String},
   dateOfIncorp: {type: Date},
   websiteOfComp: {type: String},
   emplOfCompany: {type: String},
   lineOfCompany: {type: String},
   turnoverCompany: {type: String},
   asAnAuthor: {type: String},
   companyRegAddress: {type: String},
   companyRegCity: {type: String},
   companyMailBox: {type: String},
   countryOfCompany2: {type: String},
   postalCompanyCode: {type: String},
   sameCorrespondenceCompany: {type: String},
   fiatCompanyCurrency: {type: String},
   ammountOfCompany: {type: String},
   bankOfCompany: {type: String},
   noTransfer3: {type: String},
   btcCompany1: {type: String},
   btcCompany2: {type: String},
   ethCompany1: {type: String},
   ethCompany2: {type: String},
   noTransfer4: {type: String},
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
