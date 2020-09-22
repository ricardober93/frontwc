// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
    res.statusCode = 200
    res.json({
        URLHeader: 'https://i.ebayimg.com/images/g/a7MAAOSwY7lcXgnz/s-l300.jpg',
        titulo: 'Amor y desamor',
        categoria: ['Ecchi', 'NSFW', '+18'],
        autor: 'Oru for man',
        estado: 'continuando',
        descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient interdum purus mi consectetur nullam. Massa duis tortor, diam nunc curabitur. Ut diam dictum dapibus suspendisse et mauris.',
        capitulos: [{
            imagenCap: 'https://i.ebayimg.com/images/g/ljQAAOSwdfVcXgl-/s-l300.jpg',
            serie: 1,
            tituloCap: 'El mundo empezo y no me di cuenta'
        }, {
            imagenCap: 'https://i.ebayimg.com/images/g/ljQAAOSwdfVcXgl-/s-l300.jpg',
            serie: 2,
            tituloCap: 'Casi me lo hace, me salve'
        }, {
            imagenCap: 'https://i.ebayimg.com/images/g/ljQAAOSwdfVcXgl-/s-l300.jpg',
            serie: 3,
            tituloCap: 'Termine yo haciendolo primero'
        }]
    })
}