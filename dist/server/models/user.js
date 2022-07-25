import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';
const userSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    individual: { type: String },
    title: { type: String },
    salutation: { type: String },
    name: { type: String },
    lastname: { type: String },
    date: { type: Date },
    country: { type: String },
    nationalities: { type: String },
    usPerson: { type: String },
    bornInUs: { type: String },
    greenCard: { type: String },
    possessionGreenCard: { type: String },
    subPresTest: { type: String },
    pepStatus: { type: String },
    pepNameFunc: { type: String },
    alterEmail: { type: String },
    codePhone: { type: String },
    streetNo: { type: String },
    cityState: { type: String },
    mailBox: { type: String },
    resedenceCountry: { type: String },
    postalCode: { type: String },
    domAddress: { type: String },
    corrAddressAsDom: { type: String },
    dataProcessed: { type: String },
    employmentStatus: { type: String },
    university: { type: String },
    faculty: { type: String },
    companyEmplName: { type: String },
    companyLastEmplName: { type: String },
    companyEmplAddress: { type: String },
    companyLastEmplAddress: { type: String },
    companyEmplDate: { type: Date },
    companyLastEmplDate: { type: Date },
    companyEmplCountry: { type: String },
    companyEmplWebsite: { type: String },
    companyEmplCode: { type: String },
    companyEmplProfession: { type: String },
    companyLastEmplProfession: { type: String },
    functionEmpl: { type: String },
    functionLastEmpl: { type: String },
    companyEmpl: { type: String },
    companyEmplTurnover: { type: String },
    selfEmpl: { type: Boolean },
    investEarn: { type: Boolean },
    saleOfComp: { type: Boolean },
    payOff: { type: Boolean },
    lotte: { type: Boolean },
    finProd: { type: Boolean },
    initOffer: { type: Boolean },
    gift: { type: Boolean },
    rentalProceeds: { type: Boolean },
    pensionFunds: { type: Boolean },
    salaryIncome: { type: Boolean },
    airdrops: { type: Boolean },
    saleOfEstate: { type: Boolean },
    saleOfValuables: { type: Boolean },
    saleOfOther: { type: Boolean },
    yearlyIncome1: { type: String },
    yearlyIncome2: { type: String },
    netWealth1: { type: String },
    netWealth2: { type: String },
    currency: { type: String },
    ammount: { type: String },
    bankAndCountry: { type: String },
    noTransfer: { type: Boolean },
    btc1: { type: String },
    btc2: { type: String },
    eth1: { type: String },
    eth2: { type: String },
    noTransfer2: { type: Boolean },
    declareBeneficial: { type: Boolean },
    recieveUpdates: { type: Boolean },
    legalEntity: { type: String },
    countryOfCompany: { type: String },
    typeOfCompany: { type: String },
    stockExchange: { type: String },
    entityName: { type: String },
    taxOfID: { type: String },
    countryOfReg: { type: String },
    entityType: { type: String },
    dateOfIncorp: { type: String },
    websiteOfComp: { type: String },
    emplOfCompany: { type: String },
    lineOfCompany: { type: String },
    turnoverCompany: { type: String },
    asAnAuthor: { type: Boolean },
    companyRegAddress: { type: String },
    companyRegCity: { type: String },
    companyMailBox: { type: String },
    countryOfCompany2: { type: String },
    postalCompanyCode: { type: String },
    sameCorrespondenceCompany: { type: Boolean },
    fiatCompanyCurrency: { type: String },
    ammountOfCompany: { type: String },
    bankOfCompany: { type: String },
    noTransfer3: { type: Boolean },
    btcCompany1: { type: String },
    btcCompany2: { type: String },
    ethCompany1: { type: String },
    ethCompany2: { type: String },
    noTransfer4: { type: Boolean },
    agreeRecieveCompany: { type: String },
    parties: { type: Array },
    partyName: { type: String },
    partyEmail: { type: String },
    tax: { type: String },
    telephone: { type: String },
    code: { type: String }
});
export const User = mongoose.model("User", userSchema); // --> TS format
//module.exports = mongoose.model('User', userSchema);
export const createUser = function (newUser, callback) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash(newUser.password, salt, function (err, hash) {
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};
export const comparePassword = function (candidatePassword, hash, callback) {
    bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
        if (err)
            throw err;
        callback(null, isMatch);
    });
};
