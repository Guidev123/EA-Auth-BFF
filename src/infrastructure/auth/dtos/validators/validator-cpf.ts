import { cpf } from 'cpf-cnpj-validator';

export function isValidCPF(value: string): boolean {
    if(typeof(value) !== 'string'){
        return false;
    }

    if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$|^\d{11}$/.test(value)) {
        return false;
    }

    return cpf.isValid(value, true);
}