import { IFund, IUserInvestment, InvPostResEnum } from './../../models/fund.model';
import { environment } from 'src/environments/environment';
import { FundsService } from './../../services/funds.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-funds-modal',
  templateUrl: './funds-modal.component.html',
  styleUrls: ['./funds-modal.component.scss']
})

export class FundsModalComponent implements OnInit {
  title!: string;
  selectedFund!: IFund;
  closeBtnName!: string;
  currentUserId = sessionStorage.getItem('userId');
  list: any[] = [];
  fundsForm: FormGroup = new FormGroup({});

  constructor(private fundsService: FundsService, public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
    console.log('select fund', this.selectedFund);
    this.fundsForm = new FormGroup({
      fundId: new FormControl(this.selectedFund.id, Validators.required),
      userId: new FormControl(this.currentUserId, Validators.required),
      investmentPaid: new FormControl('', Validators.compose([Validators.minLength(3), Validators.maxLength(5), Validators.required])),
    });

  }

  addUserInvestment(userInvestment: IUserInvestment): void {
    this.fundsService.addUserInvestment(userInvestment).subscribe(
      response => {
        alert('congratulations you successfully invested');
        this.bsModalRef.hide();
      },
      error => {
        if (error.status = 400) {
          switch (error.error) {
            case InvPostResEnum.InvestmentAlreadyExists:
              alert('The Current User Already Invest in this Funding');
              break;
            case InvPostResEnum.InvalidInvestmentRang:
              alert(`Investment should be between ${environment.minInvest} and ${environment.maxInvest}`);
              break;
            default:
              break;
          }
          return;
        }
        console.log('Error>>', error);
      });
  }

  onSubmit(): void {
    if (this.fundsForm.valid) {
      if (this.fundsForm.value.investmentPaid > environment.maxInvest ||
        this.fundsForm.value.investmentPaid < environment.minInvest) {
        alert(`Investment should be between ${environment.minInvest} and ${environment.maxInvest}`);
        return;
      }
      else {
        const postObject = {
          ...this.fundsForm.value,
          investmentPaid: parseInt(this.fundsForm.value.investmentPaid)
        };
        this.addUserInvestment(postObject);
      }
      //console.log(this.fundsForm);
      //console.log(this.fundsForm.value);
    }
  }

}
