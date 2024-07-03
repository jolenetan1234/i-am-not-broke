export interface Expenditure {
    id: number;
    title: string;
    date: string;
    amount: number;
    category: string;
    description?: string;
    transaction_type: "expenditure" | "earning";
};

export type NewExpenditure = Omit<Expenditure, "id">;