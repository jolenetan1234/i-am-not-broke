export interface Expenditure {
    id: number;
    title: string;
    date: string;
    amount: number;
    category: string;
    description?: string;
};

export type NewExpenditure = Omit<Expenditure, "id">;