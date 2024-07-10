export interface Expenditure {
    id: number;
    title: string;
    date: string;
    amount: number;
    category: "dining" | "entertainment" | "shopping" | "education" | "transport" | "others" | "wages" | "passive" | "transfer" | "business";
    description?: string;
    transaction_type: "expenditure" | "earning";
};

export type NewExpenditure = Omit<Expenditure, "id">;