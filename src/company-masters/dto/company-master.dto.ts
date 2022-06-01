import { Directive, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "CompanyCode")')
export class CompanyMasterDto {
  @Field() readonly ID: number
  @Field() readonly CompanyCode: string
  @Field({ nullable: true }) readonly CompanyName: string
  @Field({ nullable: true }) readonly CompanyRegistrationNumber: string
  @Field({ nullable: true }) readonly Email: string
  @Field({ nullable: true }) readonly AlternateEmail: string
  @Field({ nullable: true }) readonly ContactPersonName: string
  @Field({ nullable: true }) readonly ContactNumber: string
  @Field({ nullable: true }) readonly AlternateContactNumber: string
  @Field({ nullable: true }) readonly Fax: string
  @Field({ nullable: true }) readonly TaxIdentificationNumber: string
  @Field({ nullable: true }) readonly Nationality: string
  @Field({ nullable: true }) readonly Corporatestatus: string
  @Field({ nullable: true }) readonly IsSubmitted: number
  @Field({ nullable: true }) readonly IsActive: number
  @Field({ nullable: true }) readonly CompanyType: string;
  @Field({ nullable: true }) readonly RegisterAddress: string;
  @Field({ nullable: true }) readonly AlternateAddress: string;
  @Field({ nullable: true }) readonly District: string;
  @Field({ nullable: true }) readonly CompanyRegion: string;
  @Field({ nullable: true }) readonly County: string;
  @Field({ nullable: true }) readonly Subcounty: string;
  @Field({ nullable: true }) readonly Parish: string;
  @Field({ nullable: true }) readonly Zone_LC1: string;
  @Field({ nullable: true }) readonly PostalCode: string;
  @Field({ nullable: true }) readonly CreatedBy: number
  @Field({ nullable: true }) readonly ModifiedBy: number
  @Field({ nullable: true }) readonly CreatedDate: Date;
  @Field({ nullable: true }) readonly ModifiedDate: Date;
  @Field({ nullable: true }) readonly CompanyRole: string;
  @Field({ nullable: true }) readonly ParentID: string;
  @Field({ nullable: true }) readonly CompanyLogo: string;
  @Field({ nullable: true }) readonly CompanyLogoExtension: string;
  @Field({ nullable: true }) readonly PermitType: string;
  @Field({ nullable: true }) readonly PermitNumber: string;
  @Field({ nullable: true }) readonly IssueDate: string;
  @Field({ nullable: true }) readonly ExpiryDate: string;
  @Field({ nullable: true }) readonly PermitStatus: string;
  @Field({ nullable: true }) readonly Company_Site: string;
  @Field({ nullable: true }) readonly PermitDetails: string;
}

