import React, { Component } from 'react';

interface iState {
  noCompany: boolean;
}
export class MainHiddenInputsForRegistration extends Component<{}, iState> {

  private indivHid = React.createRef<HTMLInputElement>();

  constructor(state: iState) {

    super(state)

    this.state = {
        noCompany: true
    }
  }

  sub = () => {
    if((this.indivHid?.current as HTMLInputElement).value == 'false') {
      this.setState({ noCompany: false });
    }
  }

  companyInputs = () => {
      return (
        <div>
              <input type='hidden' name='stockExchange' id='stockExchangeHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='noExchangeFile' id='noExchangeFileHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='entityName' id='entityNameHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='taxOfID' id='taxOfIDHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='countryOfReg' id='countryOfRegHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='entityType' id='entityTypeHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='dateOfIncorp' id='dateOfIncorpHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='emplOfCompany' id='emplOfCompanyHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='lineOfCompany' id='lineOfCompanyHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='turnoverCompany' id='turnoverCompanyHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='asAnAuthor' id='asAnAuthorHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='companyRegAddress' id='companyRegAddressHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='companyRegCity' id='companyRegCityHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='companyMailBox' id='companyMailBoxHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='countryOfCompany2' id='countryOfCompany2Hid' disabled={this.state.noCompany}/>
              <input type='hidden' name='postalCompanyCode' id='postalCompanyCodeHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='sameCorrespondenceCompany' id='sameCorrespondenceCompanyHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='fiatCompanyCurrency' id='fiatCompanyCurrencyHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='ammountOfCompany' id='ammountOfCompanyHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='bankOfCompany' id='bankOfCompanyHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='noTransfer3' id='noTransfer3Hid' disabled={this.state.noCompany}/>
              <input type='hidden' name='btcCompany1' id='btcCompany1Hid' disabled={this.state.noCompany}/>
              <input type='hidden' name='btcCompany2' id='btcCompany2Hid' disabled={this.state.noCompany}/>
              <input type='hidden' name='ethCompany1' id='ethCompany1Hid' disabled={this.state.noCompany}/>
              <input type='hidden' name='ethCompany2' id='ethCompany2Hid' disabled={this.state.noCompany}/>
              <input type='hidden' name='noTransfer4' id='noTransfer4Hid' disabled={this.state.noCompany}/>
              <input type='hidden' name='agreeRecieveCompany' id='agreeRecieveCompanyHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='partyName' id='partyNameHid' disabled={this.state.noCompany}/>
              <input type='hidden' name='partyEmail' id='partyEmailHid' disabled={this.state.noCompany}/>
        </div>
      )
  }

  render() {
    return (
          <form action='/create_account' method='POST' onSubmit={this.sub} id='registrationForm1'>
                <input type='hidden' name='individual' id='indivHid' ref={this.indivHid} />
                <input type='hidden' name='legalEntity' id='legalHid' />
                <input type='hidden' name='countryOfCompany' id='countryOfCompanyHid' />
                <input type='hidden' name='typeOfCompany' id='typeOfCompanyHid' />
                <input type='hidden' name='title' id='titleHid' />
                <input type='hidden' name='salutation' id='salutationHid' />
                <input type='hidden' name='name' id='nameHid' />
                <input type='hidden' name='lastname' id='lastnameHid' />
                <input type='hidden' name='date' id='dateHid' />
                <input type='hidden' name='country' id='countryHid' />
                <input type='hidden' name='nationalities' id='nationalitiesHid' />
                <input type='hidden' name='usPerson' id='usPersonHid' />
                <input type='hidden' name='bornInUs' id='bornInUsHid' />
                <input type='hidden' name='greenCard' id='greenCardHid' />
                <input type='hidden' name='possessionGreenCard' id='possessionGreenCardHid' />
                <input type='hidden' name='subPresTest' id='subPresTestHid' />
                <input type='hidden' name='pepStatus' id='pepStatusHid' />
                <input type='hidden' name='pepNameFunc' id='pepNameFuncHid' />
                <input type='hidden' name='alterEmail' id='alterEmailHid' />
                <input type='hidden' name='codePhone' id='codePhoneHid' />
                <input type='hidden' name='streetNo' id='streetNoHid' />
                <input type='hidden' name='cityState' id='cityStateHid' />
                <input type='hidden' name='mailBox' id='mailBoxHid' />
                <input type='hidden' name='resedenceCountry' id='resedenceCountryHid' />
                <input type='hidden' name='postalCode' id='postalCodeHid' />
                <input type='hidden' name='domAddress' id='domAddressHid' />
                <input type='hidden' name='corrAddressAsDom' id='corrAddressAsDomHid' />
                <input type='hidden' name='dataProcessed' id='dataProcessedHid' />
                <input type='hidden' name='employmentStatus' id='employmentStatusHid' />
                <input type='hidden' name='university' id='universityHid' />
                <input type='hidden' name='faculty' id='facultyHid'  />
                <input type='hidden' name='companyEmplName' id='companyEmplNameHid' />
                <input type='hidden' name='companyEmplAddress' id='companyEmplAddressHid'  />
                <input type='hidden' name='companyEmplDate' id='companyEmplDateHid'  />
                <input type='hidden' name='companyEmplCountry' id='companyEmplCountryHid'  />
                <input type='hidden' name='companyEmplWebsite' id='companyEmplWebsiteHid'  />
                <input type='hidden' name='companyEmplCode' id='companyEmplCodeHid'  />
                <input type='hidden' name='companyEmplProfession' id='companyEmplProfessionHid'  />
                <input type='hidden' name='functionEmpl' id='functionEmplHid' />
                <input type='hidden' name='companyEmpl' id='companyEmplHid' />
                <input type='hidden' name='companyEmplTurnover' id='companyEmplTurnoverHid' />
                <input type='hidden' name='selfEmpl' id='selfEmplHid'  />
                <input type='hidden' name='investEarn' id='investEarnHid' />
                <input type='hidden' name='saleOfComp' id='saleOfCompHid' />
                <input type='hidden' name='payOff' id='payOffHid' />
                <input type='hidden' name='lotte' id='lotteHid' />
                <input type='hidden' name='finProd' id='finProdHid' />
                <input type='hidden' name='initOffer' id='initOfferHid' />
                <input type='hidden' name='gift' id='giftHid' />
                <input type='hidden' name='rentalProceeds' id='rentalProceedsHid' />
                <input type='hidden' name='pensionFunds' id='pensionFundsHid' />
                <input type='hidden' name='salaryIncome' id='salaryIncomeHid' />
                <input type='hidden' name='airdrops' id='airdropsHid' />
                <input type='hidden' name='saleOfEstate' id='saleOfEstateHid' />
                <input type='hidden' name='saleOfValuables' id='saleOfValuablesHid' />
                <input type='hidden' name='saleOfOther' id='saleOfOtherHid' />
                <input type='hidden' name='yearlyIncome1' id='yearlyIncome1Hid' />
                <input type='hidden' name='yearlyIncome2' id='yearlyIncome2Hid' />
                <input type='hidden' name='netWealth1' id='netWealth1Hid' />
                <input type='hidden' name='netWealth2' id='netWealth2Hid' />
                <input type='hidden' name='currency' id='currencyHid' />
                <input type='hidden' name='ammount' id='ammountHid' />
                <input type='hidden' name='bankAndCountry' id='bankAndCountryHid' />
                <input type='hidden' name='noTransfer' id='noTransferHid' />
                <input type='hidden' name='btc1' id='btc1Hid' />
                <input type='hidden' name='btc2' id='btc2Hid' />
                <input type='hidden' name='eth1' id='eth1Hid' />
                <input type='hidden' name='eth2' id='eth2Hid' />
                <input type='hidden' name='noTransfer2' id='noTransfer2Hid' />
                <input type='hidden' name='declareBeneficial' id='declareBeneficialHid' />
                <input type='hidden' name='recieveUpdates' id='recieveUpdatesHid' />
                {this.companyInputs()}
          </form>
    )
  }
}
