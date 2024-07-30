export type FormInputBoxProps = {
    type: string;
    id: string;
    name?: string;
    placeholder?: string;
    value?: any;
    required?: boolean;
    onChange?: (...args: any[]) => any;
};