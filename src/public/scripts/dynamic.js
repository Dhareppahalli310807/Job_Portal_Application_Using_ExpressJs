function deleteProduct(id) {
  const result = confirm(
    'Are you sure you want to delete this Job posting ?'
  );
  if (result) {
    fetch(`/deleteJob/${id}`, {
      method: 'GET',
    }).then((res) => {
      if (res.ok) {
        window.location.href = '/jobs';
      }
    });
  }
}

//^ --Modal trigger script
document.addEventListener('DOMContentLoaded', function() {
  var options= {
    preventScrolling: true,
  }
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, options);
});





