import { FormGroup, Validators, FormControl } from "@angular/forms";

export const formMesaTramite: any = new FormGroup({
   
    /*
    ndoc: new FormControl('', Validators.required),
    //nroVerifDNI: new FormControl('', Validators.required),

    nombres: new FormControl(''),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('', Validators.required),

    tipo_documento: new FormControl('', Validators.required),
    ndocumento: new FormControl('', Validators.required),
    folio: new FormControl('', Validators.required),
    asunto: new FormControl('', Validators.required),*/

    
    nroDNI: new FormControl('', Validators.required),

    nombres: new FormControl(''),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('', Validators.required),

    tipo_documento: new FormControl('', Validators.required),
    ndocumento: new FormControl('', Validators.required),
    folio: new FormControl('', Validators.required),
    asunto: new FormControl('', Validators.required),
    
   
});