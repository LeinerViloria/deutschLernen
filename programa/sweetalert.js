Swal.fire({
    title:"Wilkommen",
    confirmButtonText:'Entrar',
    width:'60%'
});

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',    
    showConfirmButton: false,
    timer: 1600,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  const Toast2 = Swal.mixin({
    toast: true,    
    showConfirmButton: false,
    width:'60%',
    timer: 1500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
