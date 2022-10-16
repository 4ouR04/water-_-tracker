import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'clients'})
export class Client {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    tel: number
    
    @Column()
    email: string
    
    @Column()
    password: string

    @Column()
    createdAt: Date

    @Column({default: null})
    authStrategy: string
}