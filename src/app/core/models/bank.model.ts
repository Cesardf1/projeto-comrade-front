import { BranchModel } from './branch.model';

export interface BankModel {
  id?: string;
  name: string;
  branchView?: string;
  branch: BranchModel[];
}
