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