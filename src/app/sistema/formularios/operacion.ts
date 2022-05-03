import { FormGroup, Validators, FormControl } from "@angular/forms";

export const listOperacion: any = new FormGroup({
   
    oper_id : new FormControl(''),
    expe_id : new FormControl(''),
    depe_id : new FormControl(''),
    id_usu  : new FormControl(''),
    archi_id: new FormControl(''),
    oper_fecha  : new FormControl(''),
    oper_hora   : new FormControl(''),
    oper_idtope : new FormControl(''),
    oper_forma  : new FormControl(''),
    oper_depeid_d   : new FormControl(''),
    oper_usuaid_d   : new FormControl(''),
    oper_detalle_destino    : new FormControl(''),
    oper_acciones   : new FormControl(''),
    oper_idprocesado    : new FormControl(''),
    oper_expeid_adj : new FormControl(''),
    oper_procesado  : new FormControl(''),

    destinos : new FormControl(''),
    
    /////DUDA
    relacionado : new FormControl(''),
    codigo: new FormControl(''),

    ///////
    id: new FormControl('', Validators.required), // id mpvirtuals
    nroDNI: new FormControl('', Validators.required),
    nroVerifDNI: new FormControl('', Validators.required),

    nombres: new FormControl(''),
    email: new FormControl('', [Validators.required,Validators.email]),
    phone: new FormControl('', Validators.required),

    tipo_documento: new FormControl('', Validators.required),
    ndocumento: new FormControl('', Validators.required),
    folio: new FormControl('', Validators.required),
    asunto: new FormControl('', Validators.required),
    
    adjuntar_doc_princ: new FormControl(''),
    nombreArchivo: new FormControl(''),
    anexos: new FormControl(''),    

    
   
});