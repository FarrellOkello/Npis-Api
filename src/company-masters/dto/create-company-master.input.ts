import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCompanyMasterInput {
  @Field() readonly CompanyCode: string
  @Field() readonly CompanyName: string
  @Field() readonly CompanyRegistrationNumber: string
  @Field() readonly Email: string
  @Field() readonly AlternateEmail: string
  @Field() readonly ContactPersonName: string
  @Field() readonly ContactNumber: string
  @Field() readonly AlternateContactNumber: string
  @Field() readonly Fax: string
  @Field() readonly TaxIdentificationNumber: string
  @Field() readonly Nationality: string
  @Field() readonly Corporatestatus: string
  @Field() readonly IsSubmitted: number
  @Field() readonly IsActive: number
  @Field() readonly CompanyType: string;
  @Field() readonly RegisterAddress: string;
  @Field() readonly AlternateAddress: string;
  @Field() readonly District: string;
  @Field() readonly CompanyRegion: string;
  @Field() readonly County: string;
  @Field() readonly Subcounty: string;
  @Field() readonly Parish: string;
  @Field() readonly Zone_LC1: string;
  @Field() readonly PostalCode: string;
  @Field() readonly CreatedBy: number
  @Field() readonly ModifiedBy: number
  @Field() readonly CompanyRole: string;
  @Field() readonly ParentID: string;
  @Field() readonly CompanyLogo: string;
  @Field() readonly CompanyLogoExtension: string;
  @Field() readonly PermitType: string;
  @Field() readonly PermitNumber: string;
  @Field() readonly IssueDate: string;
  @Field() readonly ExpiryDate: string;
  @Field() readonly PermitStatus: string;
  @Field() readonly Company_Site: string;
  @Field() readonly PermitDetails: string;
}
