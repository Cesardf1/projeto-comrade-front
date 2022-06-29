import { BranchModel } from 'src/app/core/models/branch.model';

export interface BankWebEntity {
  name: string;
  branch: BranchModel[];
}
