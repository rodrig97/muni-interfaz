import { FormGroup, Validators, FormControl } from "@angular/forms";

export const formMesaTramite: any = new FormGroup({
    nombres: new FormControl(''),
    email: new FormControl('', [Validators.required,Validators.email]),
    motivo: new FormControl('', Validators.required),

    asunto: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
});