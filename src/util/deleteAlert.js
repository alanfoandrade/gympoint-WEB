import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const deleteAlert = {
  delete: async () => {
    return MySwal.fire({
      title: 'Tem certeza sobre a exclusão?',
      text: 'Essa operação é irreversível.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'SIM',
      cancelButtonText: 'NÃO',
      confirmButtonColor: '#28a745',
      cancelButtonColor: '#dc3545',
      focusCancel: true,
      reverseButtons: true,
    });
  },
};

export default deleteAlert;
