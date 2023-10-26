

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('MERHABA BEN HALİT MIZRAK SANAL EVRENDEKİ DOSTLARIMA  SESLENİYORUM BİZ BURDAYIZ SİZİ BEKLİYORUZ!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Uygulama ${port} portunda çalışıyor.`);
});
