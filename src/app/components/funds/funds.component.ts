import { IFund } from './../../models/fund.model';
import { FundsModalComponent } from './../funds-modal/funds-modal.component';
import { FundsService } from './../../services/funds.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.scss']
})
export class FundsComponent implements OnInit {
  loading = true;
  bsModalRef!: BsModalRef;
  funds: IFund[] = [];

  constructor(private fundsService: FundsService, private route: ActivatedRoute, private modalService: BsModalService) {
    this.getFunds();
    // const userId = sessionStorage.getItem('userId');
  }

  ngOnInit(): void {
  }

  getFunds(): void {
    this.fundsService.getAllActiveFunds().subscribe(funds => {
      this.funds = funds;
      this.loading = false;
    });
  }

  openModalWithComponent(fund: IFund): void {
    console.log(fund);
    const initialState = {
      title: fund.title,
      selectedFund: fund
    };
    this.bsModalRef = this.modalService.show(FundsModalComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Close';
  }
}
