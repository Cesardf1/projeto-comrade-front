import { BranchModel } from 'src/app/core/models/branch.model';

export interface BankWebEntity {
  id?: string;
  name: string;
  branches: BranchModel[];
}
