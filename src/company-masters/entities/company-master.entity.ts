import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("dbo.INPIS_CompanyMaster")
export class CompanyMasterEntity {
  @PrimaryGeneratedColumn() ID: number
  @Column() CompanyCode: string
  @Column() CompanyName: string
  @Column() CompanyRegistrationNumber: string
  @Column() Email: string
  @Column() AlternateEmail: string
  @Column() ContactPersonName: string
  @Column() ContactNumber: string
  @Column() AlternateContactNumber: string
  @Column() Fax: string
  @Column() TaxIdentificationNumber: string
  @Column() Nationality: string
  @Column() Corporatestatus: string
  @Column() IsSubmitted: number
  @Column() IsActive: number
  @Column() CompanyType: string;
  @Column() RegisterAddress: string;
  @Column() AlternateAddress: string;
  @Column() District: string;
  @Column() CompanyRegion: string;
  @Column() County: string;
  @Column() Subcounty: string;
  @Column() Parish: string;
  @Column() Zone_LC1: string;
  @Column() PostalCode: string;
  @Column() CreatedBy: number
  @Column() ModifiedBy: number
  @CreateDateColumn() CreatedDate: Date;
  @UpdateDateColumn() ModifiedDate: Date;
  @Column() CompanyRole: string;
  @Column() ParentID: string;
  @Column() CompanyLogo: string;
  @Column() CompanyLogoExtension: string;
  @Column() PermitType: string;
  @Column() PermitNumber: string;
  @Column() IssueDate: string;
  @Column() ExpiryDate: string;
  @Column() PermitStatus: string;
  @Column() Company_Site: string;
  @Column() PermitDetails: string;
}





