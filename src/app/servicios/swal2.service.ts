import { Injectable } from "@angular/core";
import Swal from "sweetalert2";

@Injectable({
  providedIn: "root",
})
export class Swal2Service {
  constructor() {}

  alertaToast(title?: string, footer?: string, icon?: any, timerDefault?: any) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: timerDefault > 3000 ? 5000 : 3000,
      timerProgressBar: true,
      onOpen: (toast:any) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon,
      title,
      footer,
    });
  }

  objectToFormData(obj:any) {
    
    const formData = new FormData();
   
    // prevent to send empty fields
    const selectedFiles = obj.target.files;
    const currentFileUpload = selectedFiles.item(0);


    console.log(currentFileUpload)
    formData.append('file', currentFileUpload);
    console.log(formData)
    return formData;
  }

  alertaToEliminarItem(title: string) {
    return new Promise(resolve => {

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons.fire({
        title,
        text: 'No podrá revertir esta acción',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, estoy seguro',
        cancelButtonText: 'No, cancelar',
        reverseButtons: true
      }).then((result) => {
        if (result.value) {
          resolve(true);
        } else {
          resolve(false);
        }
      });

    });
  }
  
}
