import { model, Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

interface IUser extends Document {
  individual: boolean;
  title: string;
  salutation: string;
  name: string;
  lastname: string;
  date: Date;
  country: string;
  nationalities: string;
  usPerson: string;
  bornInUs: boolean;
  greenCard: boolean;
  possessionGreenCard: boolean;
  subPresTest: boolean;
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
  corrAddressAsDom: boolean;
  dataProcessed: boolean;
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

  tax: string;
  email: string;
  telephone: string;
  password: string;
  code: string;
}

const userSchema = new Schema <IUser>({
   individual:{type: Boolean},
   title:{type: String},
   salutation:{type: String},
   name:{type: String, required: true},
   lastname:{type: String},
   date:{type: Date},
   country:{type: String},
   nationalities:{type: String},
   usPerson:{type: String},
   bornInUs:{type: Boolean},
   greenCard:{type: Boolean},
   possessionGreenCard:{type: Boolean},
   subPresTest:{type: Boolean},
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
   corrAddressAsDom: {type: Boolean},
   dataProcessed: {type: Boolean},
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

   tax:{type: String},
   email:{type: String, required: true},
   telephone:{type: String, required: true},
   password: {type: String, required: true},
   code: {type: String, required: true}
});

module.exports = model('User', userSchema);
module.exports.createUser = function(newUser: any, callback: any) {
bcrypt.genSalt(10, function(err: Error, salt: any) {
    bcrypt.hash(newUser.password, salt, function(err: Error, hash: any) {
        newUser.password = hash;
        newUser.save(callback);
    });
  });
}

module.exports.comparePassword = function(candidatePassword: any, hash: any, callback: any) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
}
