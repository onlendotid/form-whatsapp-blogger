<script>
function sendToWhatsAppCS() {
  var name = document.getElementById(&quot;nameCS&quot;).value;
  var purpose = document.getElementById(&quot;purposeCS&quot;).value;
  var message = document.getElementById(&quot;messageCS&quot;).value;

  var whatsappNumber = &quot;6281234567890&quot;; // Ganti dengan nomor WhatsApp tujuan (tanpa &quot;+&quot; atau spasi)

  // Merangkai pesan sesuai format yang diinginkan
  var formattedMessage = `
<!-- ## PERTANYAAN ## -->

Nama: ${name}

Tujuan: ${purpose}

Testimoni: ${message}

<!-- ## PERTANYAAN ## -->
  `;

  // Membuat URL untuk mengirim pesan WhatsApp
  var url = &quot;https://wa.me/&quot; + whatsappNumber + &quot;?text=&quot; + encodeURIComponent(formattedMessage);

  // Buka tautan WhatsApp
  window.open(url, &quot;_blank&quot;);
}

// Menambahkan event listener ke tombol Kirim
document.addEventListener(&quot;DOMContentLoaded&quot;, function() {
  var submitButton = document.getElementById(&quot;submitButtonCS&quot;);
  if (submitButton) {
    submitButton.addEventListener(&quot;click&quot;, sendToWhatsAppCS);
  }
});
</script> 
