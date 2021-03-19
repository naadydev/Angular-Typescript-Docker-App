export interface IFund {
    id: number;
    title: string;
    investmentRequired: number;
    isActive: boolean;
}

export interface IUserInvestment {
    fundId: string;
    userId: string;
    investmentPaid: number;
}

export enum InvPostResEnum {
    GeneralError = 0,
    Succeeded = 1,
    InvestmentAlreadyExists = 2,
    InvalidInvestmentRang = 3
}

