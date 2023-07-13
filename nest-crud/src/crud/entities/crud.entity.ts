import { InferCreationAttributes, InferAttributes } from "sequelize";
import { Table, Column, Model } from 'sequelize-typescript';


@Table({ tableName: "ASHI" })
export class CET extends Model<InferCreationAttributes<CET>, InferAttributes<CET>>
{
    @Column({primaryKey:true,autoIncrement:true})
    id:number

    @Column
    name: string;

    @Column
    age: number;

    @Column
    address: string;

    @Column
    role: string;

    @Column({ defaultValue: false })
    isDeleted: boolean;

    @Column
    deletedAt:Date
}
