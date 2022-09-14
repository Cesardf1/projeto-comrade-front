import { BranchModel } from './branch.model';

export interface BankModel {
  id?: string;
  name: string;
  branchCodeView?: string;
  branchAdressView?: string;
  branches: BranchModel[];
}
