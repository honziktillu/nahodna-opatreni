const text = document.getElementById("text");
const share = document.getElementById("share");
const post = document.getElementById("post");

const who = [
  "MINISTR ZDRAVOTNICTVÍ",
  "HAMÁČEK",
  "PREMIÉR",
  "BABIŠ",
  "MINISTR VNITRA",
  "MINISTR ŠKOLSTVÍ",
  "PLAGA",
];

const phrases = [
  "NĚMECKO ZAŘADILO ČESKOU REPUBLIKU NA SEZNAM EPIDEMICKY VYSOCE RIZIKOVÝCH ZEMÍ",
  "K ROZVOLNĚNÍ DOJDE NEJDŘÍVE ZA TŘI TÝDNY",
  "K ROZVOLNĚNÍ DOJDE NEJDŘÍVE ZA DVA TÝDNY",
  "K ROZVOLNĚNÍ DOJDE NEJDŘÍVE ZA TÝDEN",
  "NÁVRH NOVÉ TABULKY PES UMOŽŇUJE NÁVRAT ZÁVĚREČNÝCH ROČNÍKŮ ZŠ A SŠ I V PÁTEM STUPNI. VLÁDA HO PROJEDNÁ VE STŘEDU",
  "V ČESKÉ REPUBLICE BYL POTVRZEN VÝSKYT NAKAŽLIVĚJŠÍ BRITSKÉ MUTACE KORONAVIRU",
  "OD ÚTERÝ BUDOU MOCI OTEVŘÍT PAPÍRNICTVÍ, OBCHODY S DĚTSKÝM OBLEČENÍM A OBCHODY SE SPODNÍM PRÁDLEM",
  "LABORATOŘ MÁ PODEZŘENÍ NA VÝSKYT NAKAŽLIVĚJŠÍ BRITSKÉ MUTACE KORONAVIRU V ČR",
  "BABIŠ DOPORUČIL ZRUŠIT U MATURITY DIDAKTICKÉ TESTY",
  "BABIŠ DOPORUČIL ZRUŠIT U MATURITY ÚSTNÍ ZKOUŠKY",
  "BABIŠ DOPORUČIL ZRUŠIT U MATURITY SLOHY",
  "BABIŠ DOPORUČIL ZRUŠIT MATURITY",
  "PLAGA DOPORUČIL ZRUŠIT U MATURITY DIDAKTICKÉ TESTY",
  "PLAGA DOPORUČIL ZRUŠIT U MATURITY ÚSTNÍ ZKOUŠKY",
  "PLAGA DOPORUČIL ZRUŠIT U MATURITY SLOHY",
  "PLAGA DOPORUČIL ZRUŠIT MATURITY",
  "HAMÁČEK DOPORUČIL ZRUŠIT U MATURITY DIDAKTICKÉ TESTY",
  "HAMÁČEK DOPORUČIL ZRUŠIT U MATURITY ÚSTNÍ ZKOUŠKY",
  "HAMÁČEK DOPORUČIL ZRUŠIT U MATURITY SLOHY",
  "HAMÁČEK DOPORUČIL ZRUŠIT MATURITY",
];

const phrasesPeople = [
  "OTEVŘENÍ ŠKOL VE STUPNI 5 SYSTÉMU PES SI NEDOKÁŽU PŘEDSTAVIT",
  "OTEVŘENÍ ŠKOL VE STUPNI 4 SYSTÉMU PES SI NEDOKÁŽU PŘEDSTAVIT",
  "OTEVŘENÍ ŠKOL VE STUPNI 3 SYSTÉMU PES SI NEDOKÁŽU PŘEDSTAVIT",
  "REGISTRACE LIDÍ POD 80 LET K OČKOVÁNÍ SE ODSOUVÁ",
  "OČKOVAT BY SE NECHALO 58 PROCENT DOTÁZANÝCH",
  "PRO ZVLÁDNUTÍ EPIDEMIE MUSÍME NA 2 AŽ 3 TÝDNY UDĚLAT TVRDÝ LOCKDOWN, NEUVAŽOVAT O OTEVÍRÁNÍ ŠKOL, UZAVŘÍT TOVÁRNY",
  "KVŮLI BRITSKÉ MUTACI KORONAVIRU BUDOU MUSET BÝT ZPŘÍSNĚNA OPATŘENÍ",
  "DISKUTUJEME O ZAVEDENÍ POVINNÉHO NOŠENÍ RESPIRÁTORŮ V OBCHODECH A VEŘEJNÉ DOPRAVĚ",
  "O ROZVOLNĚNÍ OPATŘENÍ A PŘECHODU DO STUPNĚ 4 SE DÁ UVAŽOVAT AŽ BUDE 3 TISÍCE HOSPITALIZOVANÝCH S COVIDEM",
  "VE STUPNI 5 SYSTÉMU PES JEŠTĚ NĚJAKOU DOBU ZŮSTANEME",
  "VE STUPNI 4 SYSTÉMU PES JEŠTĚ NĚJAKOU DOBU ZŮSTANEME",
  "VE STUPNI 3 SYSTÉMU PES JEŠTĚ NĚJAKOU DOBU ZŮSTANEME",
  "VE STUPNI 2 SYSTÉMU PES JEŠTĚ NĚJAKOU DOBU ZŮSTANEME",
  "VE STUPNI 1 SYSTÉMU PES JEŠTĚ NĚJAKOU DOBU ZŮSTANEME",
  "MUSÍME SE DOSTAT NA 2 TISÍCE HOSPITALIZOVANÝCH S COVIDEM, ABY BYLO MOŽNÉ ROZVOLŇOVAT",
  "O ZMÍRNĚNÍ OPATŘENÍ BUDE VLÁDA JEDNAT PRAVDĚPODOBNĚ V PONDĚLÍ",
  "O ZMÍRNĚNÍ OPATŘENÍ BUDE VLÁDA JEDNAT PRAVDĚPODOBNĚ V ÚTERÝ",
  "O ZMÍRNĚNÍ OPATŘENÍ BUDE VLÁDA JEDNAT PRAVDĚPODOBNĚ VE STŘEDU",
  "O ZMÍRNĚNÍ OPATŘENÍ BUDE VLÁDA JEDNAT PRAVDĚPODOBNĚ VE ČTVRTEK",
  "O ZMÍRNĚNÍ OPATŘENÍ BUDE VLÁDA JEDNAT PRAVDĚPODOBNĚ V PÁTEK",
  "O ZMÍRNĚNÍ OPATŘENÍ BUDE VLÁDA JEDNAT PRAVDĚPODOBNĚ V SOBOTU",
  "O ZMÍRNĚNÍ OPATŘENÍ BUDE VLÁDA JEDNAT PRAVDĚPODOBNĚ V NEDĚLI",
  "PLOŠNÉ NOŠENÍ ROUŠEK MŮŽE SKONČIT V LÉTĚ",
  "PLOŠNÉ NOŠENÍ ROUŠEK MŮŽE SKONČIT NA JAŘE",
  "PLOŠNÉ NOŠENÍ ROUŠEK MŮŽE SKONČIT NA PODZIM",
  "PLOŠNÉ NOŠENÍ ROUŠEK MŮŽE SKONČIT V ZIMĚ",
  "VLÁDA V PONDĚLÍ POŽÁDÁ SNĚMOVNU O PRODLOUŽENÍ NOUZOVÉHO STAVU O 30 DNÍ",
  "VLÁDA V ÚTERÝ POŽÁDÁ SNĚMOVNU O PRODLOUŽENÍ NOUZOVÉHO STAVU O 30 DNÍ",
  "VLÁDA VE STŘEDU POŽÁDÁ SNĚMOVNU O PRODLOUŽENÍ NOUZOVÉHO STAVU O 30 DNÍ",
  "VLÁDA VE ČTVRTEK POŽÁDÁ SNĚMOVNU O PRODLOUŽENÍ NOUZOVÉHO STAVU O 30 DNÍ",
  "VLÁDA V PÁTEK POŽÁDÁ SNĚMOVNU O PRODLOUŽENÍ NOUZOVÉHO STAVU O 30 DNÍ",
  "ZMÍRNĚNÍ OPATŘENÍ SE NEDÁ V PŘÍSTÍM TÝDNU OČEKÁVAT",
  "S ŘADOU POMĚRNĚ TVRDÝCH OPATŘENÍ LZE POČÍTAT ZHRUBA DO BŘEZNA, MEZI DUBNEM A ČERVNEM NASTANE POSTUPNÉ ROZVOLŇOVÁNÍ",
];

const phrasesDate = [
  "JE REÁLNÁ ŠANCE, ŽE SE DEVÁŤÁCI A MATURANTI VRÁTI DO ŠKOL OD ",
  "VLÁDA PRODLOUŽILA SOUČASNÁ OPATŘENÍ DO ",
  "NOUZOVÝ STAV PRODLOUŽEN DO ",
  "VLÁDA SCHVÁLILA ŽÁDOST O PRODLOUŽENÍ NOUZOVÉHO STAVU DO ",
];

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};

window.onload = () => {
  let randomNumber = random(0, 2);
  switch (randomNumber) {
    case 0:
      let a = random(0, phrases.length - 1);
      text.innerHTML = phrases[a];
      break;
    case 1:
      let rPer = random(0, who.length - 1);
      let rPhr = random(0, phrasesPeople.length - 1);
      let person = who[rPer];
      let phrase = phrasesPeople[rPhr];
      text.innerHTML = `${person}:<br>${phrase}`;
      break;
    case 2:
      let rPhra = random(0, phrasesDate.length - 1);
      let newPhrase = phrasesDate[rPhra];
      let date = randomDate(new Date(), new Date(2030, 1, 1));
      text.innerHTML = `${newPhrase}${date.getDate()}.${
        date.getMonth() + 1
      }.${date.getFullYear()}`;
      break;
  }
  html2canvas(post).then((canvas) => {
    let img = canvas.toDataURL('image/png');
    share.href = img;
  });
};


setTimeout(() => {
  location.reload();
}, 5000);