import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Entity } from "typeorm";

@ObjectType()
@Entity("User")
export class User {
  @Field()
  userId: string;

  @Field()
  email: string;

  @Field(() => Int)
  age: number;

  @Field({ nullable: true })
  isSubscribed?: boolean;
}