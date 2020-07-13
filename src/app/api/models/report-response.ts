import { BestHabits } from './best-habits';

export interface ReportResponse {
    nivelMaturidade: string;
    porcentagemRespostasPositivas: string;
    porcentagemRespostasNegativas: string;
    porcentagemRespostasNulas: string;
    recomendacoes: BestHabits;

}
