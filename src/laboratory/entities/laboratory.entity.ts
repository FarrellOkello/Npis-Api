import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity("Laboratory")
export class LaboratoryEntity {
  @PrimaryGeneratedColumn() Gou_Exp_Limit_ID: number;
  @Column() Year_ID: number;
  @Column() Vote_Code: string;
  @Column() Quarterly: string;
  @Column() Created_Date: Date;
  @Column() Modified_Date: Date;
  @Column({ nullable: true }) Created_By: string;
  @Column({ nullable: true }) Modified_By: string;
}
