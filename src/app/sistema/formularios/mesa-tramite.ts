import { FormGroup, Validators, FormControl } from "@angular/forms";

export const formMesaTramite: any = new FormGroup({
   
    /*
    expe_id: new FormControl('', Validators.required),
    expe_origen: new FormControl('', Validators.required),
    expe_tipo: new FormControl('', Validators.required),
    expe_fecha: new FormControl('', Validators.required),
    expe_hora: new FormControl('', Validators.required),
    rpri_id: new FormControl('', Validators.required),
    expe_forma: new FormControl('', Validators.required),
    depe_id: new FormControl('', Validators.required),
    expe_depe_detalle: new FormControl('', Validators.required),
    expe_firma: new FormControl('', Validators.required),
    expe_cargo: new FormControl('', Validators.required),
    texp_id: new FormControl('', Validators.required),
    expe_fecha_doc: new FormControl('', Validators.required),
    expe_numero_doc: new FormControl('', Validators.required),
    expe_siglas_doc: new FormControl('', Validators.required),
    expe_proyectado: new FormControl('', Validators.required),
    frec_id: new FormControl('', Validators.required),
    expe_folios: new FormControl('', Validators.required),
    expe_asunto: new FormControl('', Validators.required),
    expe_relacionado: new FormControl('', Validators.required),
    id_uso: new FormControl('', Validators.required),
    iduso_depe: new FormControl('', Validators.required),
    expe_emailorigen: new FormControl('', Validators.required),
    ar_expearchivo: new FormControl('', Validators.required),
    expe_estado: new FormControl('', Validators.required),
    expe_clastupa: new FormControl('', Validators.required),
    idtdoc: new FormControl('', Validators.required),
    expe_numtdoc: new FormControl('', Validators.required),
    tupa_id: new FormControl('', Validators.required),
    doc_identidad: new FormControl('', Validators.required),
    expe_hora_doc: new FormControl('', Validators.required),*/

    nroDNI: new FormControl('', Validators.required),
    nroVerifDNI: new FormControl('', Validators.required),

    nombres: new FormControl(''),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('', Validators.required),

    tipo_documento: new FormControl('', Validators.required),
    ndocumento: new FormControl('', Validators.required),
    folio: new FormControl('', Validators.required),
    asunto: new FormControl('', Validators.required),
    
    //adjuntar_doc_princ: new FormControl('', Validators.required),
    //anexos: new FormControl('', Validators.required),
    
   
});