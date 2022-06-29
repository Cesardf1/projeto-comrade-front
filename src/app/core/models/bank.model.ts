import { BranchModel } from './branch.model';

export interface BankModel {
  name: string;
  branchView?: string;
  branch: BranchModel[];
}
