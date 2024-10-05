let koyluTercihi = prompt("Hangisiyle konuşmak istersin? \n a)Korkmuş bir kadın b)cesur bir avcı");

if (koyluTercihi === "a"){
  console.log("Kadın, cadının gece vakti köyün yakınındaki ormanda yaşadığını söylüyor.");
} else if (koyluTercihi == "b"){
  console.log("Avcı, cadının lanetli bir çiçekten güç aldığını ve onu bulman gerektiğini söylüyor.");
} else {
  console.log("Geçersiz seçim. Lütfen a veya b gir.");
}


let ormanYolu = prompt("Hangi yolu tercih edersin? \n a)Karanlık ve dolambaçlı b)açık ama tehlikeli");

if (ormanYolu === "a"){
  console.log("Karanlık yolda ilerlerken, aniden bir grup canavarla karşılaşıyorsun!");
} else if (ormanYolu === "b"){
  console.log("Açık yolda ilerliyorsun ama ormanın derinliklerinden tuhaf sesler geliyor.");
} else {
  console.log("Geçersiz seçim. Lütfen a veya b gir.");
}

let canavarKarari = prompt("Canavarlarla yüzyüzesin. Neye karar vereceksin? \n a)savaşmaya b)iletişim kurmaya");

if (canavarKarari === "a"){
  console.log("Savaşmaya karar verdin ve cesaretinle canavarları yendin! Yoluna devam edebilirsin.");
} else if (canavarKarari === "b"){
  console.log("İletişim kurarak onları sakinleştiriyorsun ve yolunu açmalarını sağlıyorsun.");
} else {
  console.log("Geçersiz seçim. Lütfen a veya b gir.");
}

console.log("Artık cadının yuvasına geldin. Cadı seni görünce gülümseyerek, kayıp rüyayı geri vermeye istekli olup olmadığını soruyor.");

let cadiKarari = prompt("Cadı ile savaşa mı (a) yoksa onu ikna etmeye mi (b) çalışacaksın?");

if (cadiKarari === "a"){
  console.log("Cadı ile amansız bir savaş başlıyor. Büyülerini kullanarak ona karşı koyuyorsun!");
} else if (cadiKarari === "b"){
  console.log("Cadıyı ikna ediyorsun; aslında kayıp rüya, onun geçmişine aittir ve onu geri vermek istiyor.");
} else {
  console.log("Geçersiz seçim. Lütfen 1 veya 2 gir.");
}

if (cadıKararı === "1" || cadıKararı === "2") {
  console.log("Cadıyı yendin ya da ikna ettin. Kayıp rüyayı geri almayı başardın. Köye döndüğünde, halk senin cesaretini ve zekânı takdir ediyor. Krallığın geleceği artık senin ellerinde!");
}