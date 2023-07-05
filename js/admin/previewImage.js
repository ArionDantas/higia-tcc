const inputFile = document.getElementById('inputImagemProduto');
const previewDiv = document.getElementById('preview');

inputFile.addEventListener('change', function() {
  const file = this.files[0];
  const reader = new FileReader();

  reader.onload = function(event) {
    const image = new Image();
    image.src = event.target.result;
    image.id = 'image-product'

    previewDiv.innerHTML = '';
    previewDiv.appendChild(image);
  };

  reader.readAsDataURL(file);
});