<script>
function sendToWhatsApp() {
    var name = document.getElementById(&quot;testimonialName&quot;).value;
    var website = document.getElementById(&quot;testimonialWebsite&quot;).value;
    var message = document.getElementById(&quot;testimonialMessage&quot;).value;

    var whatsappNumber = &quot;6281234567890&quot;; // Ganti dengan nomor WhatsApp tujuan (tanpa &quot;+&quot; atau spasi)

    // Merangkai pesan sesuai format yang diinginkan
    var formattedMessage = `

<!-- ## TESTIMONI ## -->
        
Nama: ${name}
        
Alamat Situs: ${website}
        
Testimoni: ${message}
        
<!-- ## TESTIMONI ## -->
    `;

    // Membuat URL untuk mengirim pesan WhatsApp
    var url = &quot;https://wa.me/&quot; + whatsappNumber + &quot;?text=&quot; + encodeURIComponent(formattedMessage);
    
    // Buka tautan WhatsApp
    window.open(url, &quot;_blank&quot;);
}

// Menambahkan event listener ke tombol Kirim
document.addEventListener(&quot;DOMContentLoaded&quot;, function() {
    var submitButton = document.getElementById(&quot;submitButton&quot;);
    if (submitButton) {
        submitButton.addEventListener(&quot;click&quot;, sendToWhatsApp);
    }
});
</script> 
