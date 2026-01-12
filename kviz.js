function ertekel(){
var pontszam = 0;
if(document.kviz.kerdes0.value == "b"){
    pontszam++;
}

if(document.kviz.kerdes1.value == "b"){
    pontszam++;
}

if(document.kviz.kerdes2.value == "c"){
    pontszam++;
}

if(document.kviz.kerdes3.value == "c"){
    pontszam++;
}

if(document.kviz.kerdes4.value == "c"){
    pontszam++;
}

if(document.kviz.kerdes5.value == "a"){
    pontszam++;
}

if(document.kviz.kerdes6.value == "c"){
    pontszam++;
}

if(document.kviz.kerdes7.value == "c"){
    pontszam++;
}

if(document.kviz.kerdes8.value == "b"){
    pontszam++;
}

if(document.kviz.kerdes9.value == "b"){
    pontszam++;
}

alert("Az eredmény: 10/" +pontszam)


}
