import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLaboratoryInput {
  @Field({ nullable: true }) readonly Year_ID: number;
  @Field({ nullable: true }) readonly Vote_Code: string;
  @Field({ nullable: true }) readonly Quarterly: string;
  @Field({ nullable: true }) readonly Created_Date: Date;
  @Field({ nullable: true }) readonly Modified_Date: Date;
  @Field({ nullable: true }) readonly Created_By: string;
  @Field({ nullable: true }) readonly Modified_By: string;
}
