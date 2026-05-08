import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Producto {
    @PrimaryGeneratedColumn('uuid')
    id!: string

    @Column()
    nombre!: string

    @Column()
    stock!: number

    @Column()
    categoriald!: string

}