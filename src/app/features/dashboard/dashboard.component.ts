import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    constructor(private router: Router) {}

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit(): void {}
    viewEmployeeDetailsClick() {
        // Navigate to the view route
        // this.router.navigate(['Component/view']);
        this.router.navigate(['employeeDetails/viewEmployee']);
    }
    stakeHolderClick(){
        this.router.navigate(['stakeHolder']);
    }
    interestRateClick()
    {
        this.router.navigate(['interestRateMaster'])
    }
    delegatedRoleClick()
    {
        this.router.navigate(['delegatedRole'])
    }
    reportClick()
    {}
    taggingReceiptPaymentClick()
    {
        this.router.navigate(['taggingReceiptPayment'])
    }
    EmployeePFClick(){
        this.router.navigate(['Employee-PF-balance-transfer']); 
    }
    InClick(){
        this.router.navigate(['Interest-year-capture/capture-pf-interest']);
    }
    InboxClick(){
        this.router.navigate(['Inbox']);  
    }
    WorkflowClick(){
        this.router.navigate(['workflow-management']);
    }
    openingbalanceClick() {
        // Navigate to the view route
        // this.router.navigate(['Component/opening-balance]);
        this.router.navigate(['opening-balance-capture']);
    }
    paymentClick(){
        this.router.navigate(['Final-payment']);
    }
    BillClick(){
         this.router.navigate(['Interest-credit-bill-statement'])
    }
    advanceClick(){
        this.router.navigate(['advance/viewAdvance'])
    }
}
