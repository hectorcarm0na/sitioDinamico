const express= require('express');
const hbs=require('hbs');
const app=express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res)=>{
    res.render('index', {
        nombre:'hector sebastian carmona viezcas',
        grado:'4',
        grupo:'g',
        especialidad:'programacion',
        date:new Date().getFullYear(),
        titulo: 'Pagina principal',
    });
});
app.get('/monete', (req, res)=>{
    res.render('monete', {
        nombre:'hector sebastian carmona viezcas',
        grado:'4',
        grupo:'g',
        especialidad:'programacion',
        date:new Date().getFullYear(),
        titulo: 'cloude monette',
        descripcion:'Claude Monet París, 14 de noviembre de 1840-Giverny, 5 de diciembre de 1926) fue un pintor francés, uno de los creadores del impresionismo. El término impresionismo deriva del título de su obra Impresión, sol naciente 1872 Sus primeras obras hasta la mitad de la década de 1860 son de estilo realista. Monet logró exponer algunas en el Salón de París. A partir del final de la década de 1860 comenzó a pintar obras impresionistas. Esta desviación del gusto de la época, que era marcado por las academias de arte, empeoró su situación económica a la vez que afianzó su decisión de continuar en ese azaroso camino.En la década de 1870 formó parte de las exposiciones impresionistas en las cuales también participaron Pierre-Auguste Renoir y Edgar Degas. Su obra Impresión, sol naciente formó parte del Salon des Refusés de 1874. Su carrera fue impulsada por el marchante Paul Durand-Ruel, pero a pesar de esto su situación financiera permaneció siendo difícil hasta mediados de la década de 1890 En esta época, Monet desarrolló el concepto de las «series», en las que un motivo es pintado repetidas veces con distinta iluminación. Al mismo tiempo comenzó a trabajar en el famoso jardín de su casa en Giverny con estanques de nenúfares que luego utilizó como motivo para sus pinturas',
        pintor:'El es el pintor',
        pinturas:'estas son mis pinturas favoritas:'

});
    });
app.get('/picasso', (req, res)=>{
    res.render('picasso', {
        nombre:'hector sebastian carmona viezcas',
        grado:'4',
        grupo:'g',
        especialidad:'programacion',
        date:new Date().getFullYear(),
        titulo: 'pablo picasso',
        descripcion:'Pablo Ruiz Picasso (Málaga, 25 de octubre de 1881-Mougins, 8 de abril de 1973) fue un pintor y escultor español, creador, junto con Georges Braque, del cubismo.Es considerado desde la génesis del siglo xx como uno de los mayores pintores que participaron en muchos movimientos artísticos que se propagaron por el mundo y ejercieron una gran influencia en otros grandes artistas de su tiempo. Sus trabajos están presentes en museos y colecciones de toda Europa y del mundo. Además, abordó otros géneros como el dibujo, el grabado, la ilustración de libros, la escultura, la cerámica y el diseño de escenografía y vestuario para montajes teatrales. También tiene una breve obra literaria',
        pintor:'El es el pintor',
        pinturas:'estas son mis pinturas favoritas:'
    });
});
app.get('/rembrant', (req, res)=>{
    res.render('rembrant', {
        nombre:'hector sebastian carmona viezcas',
        grado:'4',
        grupo:'g',
        especialidad:'programacion',
        date:new Date().getFullYear(),
        titulo: 'rembrant',
        descripcion:'Rembrandt Harmenszoon van Rijn (Acerca de este sonido [ˈrɛmbrɑnt ˈɦɑrmə(n)soːn vɑn ˈrɛin] (?·i) Leiden, 15 de julio de 1606-Ámsterdam, 4 de octubre de 1669), más conocido simplemente como Rembrandt, fue un pintor y grabador neerlandés. La historia del arte lo considera uno de los mayores maestros barrocos de la pintura y el grabado, siendo con seguridad el artista más importante de la historia de los Países Bajos.1​ Su aportación a la pintura coincide con lo que los historiadores han dado en llamar la edad de oro neerlandesa, el considerado momento cumbre de su cultura, ciencia, comercio, poderío e influencia política Habiendo alcanzado el éxito en la juventud, sus últimos años estuvieron marcados por la tragedia personal y la ruina económica. Sus dibujos y pinturas siempre fueron muy populares, gozando también de gran predicamento entre los artistas y durante veinte años se convirtió en el maestro de prácticamente todos los pintores neerlandeses.2​ Entre los mayores logros creativos de Rembrandt están los magistrales retratos que realizó para sus contemporáneos, sus autorretratos y sus ilustraciones de escenas bíblicas. En sus autorretratos, especialmente, se observa siempre la mirada humilde y sincera de un artista que trazó en ellos su propia biografía',
        pintor:'El es el pintor',
        pinturas:'estas son mis pinturas favoritas:'
    });
});
app.get('/vela', (req, res)=>{
    res.render('velazquez', {
        nombre:'hector sebastian carmona viezcas',
        grado:'4',
        grupo:'g',
        especialidad:'programacion',
        date:new Date().getFullYear(),
        titulo: 'cloude monette',
        descripcion:'Pasó sus primeros años en Sevilla, donde desarrolló un estilo naturalista de iluminación tenebrista, por influencia de Caravaggio y sus seguidores. A los 24 años se trasladó a Madrid, donde fue nombrado pintor del rey Felipe IV y cuatro años después fue ascendido a pintor de cámara, el cargo más importante entre los pintores de la corte. A esta labor dedicó el resto de su vida. Su trabajo consistía en pintar retratos del rey y de su familia, así como otros cuadros destinados a decorar las mansiones reales. Su presencia en la corte le permitió estudiar la colección real de pintura que, junto con las enseñanzas de su primer viaje a Italia, donde conoció tanto la pintura antigua como la que se hacía en su tiempo, fueron influencias determinantes para evolucionar a un estilo de gran luminosidad, con pinceladas rápidas y sueltas. En su madurez, a partir de 1631, pintó de esta forma grandes obras como La rendición de Breda. En su última década su estilo se hizo más esquemático y abocetado, alcanzando un dominio extraordinario de la luz. Este período se inauguró con el Retrato del papa Inocencio X, pintado en su segundo viaje a Italia, y a él pertenecen sus dos últimas obras maestras: Las meninas y Las hilanderas.',
        pintor:'El es el pintor',
        pinturas:'estas son mis pinturas favoritas:'
    });
});
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});