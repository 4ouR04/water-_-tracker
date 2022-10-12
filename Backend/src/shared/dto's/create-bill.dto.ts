export class CreateBillDto{
    readonly amnt: string
    readonly owner: string
    readonly unitCost: number
    readonly totalPayable: number
}