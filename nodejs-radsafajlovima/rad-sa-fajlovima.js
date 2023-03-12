const fs = require('fs');
const { exec } = require('child_process');

// Kreiranje fajla
fs.writeFile('testfajl.txt', 'Ovo je neki tekst!', (err) => {
  if (err) throw err;
  console.log('Fajl je uspješno kreiran!');
  
  // Izlistavamo samo fajlove u trenutnom direktorijumu koristeći "exec" komandu
  // Ovo je implementacija za windows okruzenje, a ako koristimo linux ili macOS
  // Umjesto 'dir /b /a-d' napisali bismo 'ls -p | grep -v /'
  exec('dir /b /a-d', (err, stdout, stderr) => { 
    if (err) {
      console.error(`exec greška: ${err}`);
      return;
    }
    
    // Formatiramo
    const fileList = stdout.trim().split('\r\n').map(file => file.replace('\\', ''));
    const formattedList = fileList.join(', ');
    
    console.log(`Trenutni fajlovi u direktorijumu: ${formattedList}`);
  });
});
