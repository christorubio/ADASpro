<template>
  <div class="pdf">
    <button class="btn" @click="downloadPDF"> Download PDF</button>
  </div>
</template>


<script>

import jsPDF from 'jspdf'

export default {
  name: 'pdf',
  data() {
    return {

    }
  },
  methods: {

  downloadPDF() {
    var pdf = new jsPDF();

    pdf.text('Hello World', 10, 10);
    pdf.save('info.pdf');
  }
  }

}
</script>