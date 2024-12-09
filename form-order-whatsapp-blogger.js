<script>
function sendOrderToWhatsApp() {
  var name = document.getElementById(&quot;orderName&quot;).value;
  var purpose = document.getElementById(&quot;orderPurpose&quot;).value;
  var message = document.getElementById(&quot;orderMessage&quot;).value;
  var voucher = document.getElementById(&quot;orderVoucher&quot;).value; // Mengambil nilai Voucher Diskon

  var whatsappNumber = &quot;6281234567890&quot;; // Ganti dengan nomor WhatsApp tujuan (tanpa &quot;+&quot; atau spasi)

  // Merangkai pesan sesuai format yang diinginkan
  var formattedMessage = `
<!-- ## PEMESANAN ## -->

Nama Pemesan: ${name}

Jenis Pemesanan: ${purpose}

Voucher Diskon: ${voucher ? voucher : &#39;Tidak ada&#39;}

Detail Pemesanan: ${message}

<!-- ## PEMESANAN ## -->
  `;

  // Membuat URL untuk mengirim pesan WhatsApp
  var url = &quot;https://wa.me/&quot; + whatsappNumber + &quot;?text=&quot; + encodeURIComponent(formattedMessage);

  // Buka tautan WhatsApp
  window.open(url, &quot;_blank&quot;);
}

// Menambahkan event listener ke tombol Kirim
document.addEventListener(&quot;DOMContentLoaded&quot;, function() {
  var submitButton = document.getElementById(&quot;submitOrderButton&quot;);
  if (submitButton) {
    submitButton.addEventListener(&quot;click&quot;, sendOrderToWhatsApp);
  }
});
</script> 
