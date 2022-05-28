import { CreateCompanyMasterInput } from './create-company-master.input';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCompanyMasterInput extends PartialType(CreateCompanyMasterInput) { }
