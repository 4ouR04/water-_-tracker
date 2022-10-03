export interface IRecord{
    id: number
    client_name: string
    client_phone: string
    client_email?: string
    meter_number: string
    initial_reading: string
    final_reading: string
    consumed_units: string
    total_bill: string
    status: string
}