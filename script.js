use libreria

// 1.
db.librosEspeciales.insertMany(
    [
        {
            titulo : 'Cocinando con Carlos',
            genero : 'cocina',
            autores : ['Carlos Gomez', 'Paulina Cocina'],
            paginas : 200,
            nivel : 'infantil',
            precios : [
                {
                    tipo : 'fisico',
                    precio : 10000
                },
                {
                    tipo : 'digital',
                    precio : 5000
                }
            ],
            disponible : true,
            editorial : {
                nombre : 'Recetas locas',
                pais : 'Argentina',
                fundacion : 2000
            }
        },
        {
            titulo : 'Cocinando con Maria',
            genero : 'cocina',
            autores : ['Maria Laura Fernandez', 'Paulina Cocina'],
            paginas : 350,
            nivel : 'juvenil',
            precios : [
                {
                    tipo : 'fisico',
                    precio : 15000
                },
                {
                    tipo : 'digital',
                    precio : 7500
                }
            ],
            disponible : false,
            editorial : {
                nombre : 'Recetas locas',
                pais : 'Argentina',
                fundacion : 2000
            }
        },
        {
            titulo : 'El dia de Lucia',
            genero : 'romance',
            autores : ['Lucia Herrera'],
            paginas : 280,
            nivel : 'juvenil',
            precios : [
                {
                    tipo : 'fisico',
                    precio : 8000
                },
                {
                    tipo : 'digital',
                    precio : 3000
                }
            ],
            disponible : true,
            editorial : {
                nombre : 'Editorial Planeta',
                pais : 'Argentina',
                fundacion : 1960
            }
        },
        {
            titulo : 'La noche de Lucia',
            genero : 'terror',
            autores : ['Lucia Herrera', 'Marco Aurelio'],
            paginas : 420,
            nivel : 'adulto',
            precios : [
                {
                    tipo : 'fisico',
                    precio : 9000
                },
                {
                    tipo : 'digital',
                    precio : 5000
                }
            ],
            disponible : false,
            editorial : {
                nombre : 'Editorial misterio',
                pais : 'Chile',
                fundacion : 2019
            }
        },
        {
            titulo : 'Las aventuras de Carlos y Pedro Enrique',
            genero : 'aventura',
            autores : ['Carlos Gomez', 'Pedro Enrique'],
            paginas : 180,
            nivel : 'infantil',
            precios : [
                {
                    tipo : 'fisico',
                    precio : 7000
                },
                {
                    tipo : 'digital',
                    precio : 2000
                }
            ],
            disponible : true,
            editorial : {
                nombre : 'Editorial aventura',
                pais : 'Argentina',
                fundacion : 2003
            }
        },
        {
            titulo : 'El trabajo de maria',
            genero : 'terror',
            autores : ['Maria Laura Fernandez'],
            paginas : 170,
            nivel : 'adulto',
            precios : [
                {
                    tipo : 'fisico',
                    precio : 15000
                },
                {
                    tipo : 'digital',
                    precio : 7500
                }
            ],
            disponible : true,
            editorial : {
                nombre : 'Editorial Planeta',
                pais : 'Argentina',
                fundacion : 1960
            }
        },
        {
            titulo : '100 chistes para chicos',
            genero : 'comedia',
            autores : ['Franco Franco'],
            paginas : 100,
            nivel : 'infantil',
            precios : [
                {
                    tipo : 'fisico',
                    precio : 5000
                },
                {
                    tipo : 'digital',
                    precio : 2000
                }
            ],
            disponible : true,
            editorial : {
                nombre : 'Editorial Planeta',
                pais : 'Argentina',
                fundacion : 1960
            }
        },
        {
            titulo : 'Mi vida',
            genero : 'autobiografia',
            autores : ['Carlos Gomez'],
            paginas : 500,
            nivel : 'adulto',
            precios : [
                {
                    tipo : 'fisico',
                    precio : 18000
                },
                {
                    tipo : 'digital',
                    precio : 10000
                }
            ],
            disponible : true,
            editorial : {
                nombre : 'Editorial Carlos',
                pais : 'Argentina',
                fundacion : 2024
            }
        }
        
    ]
)

// 2.
db.librosEspeciales.find(
    {
        autores : 'Carlos Gomez'
    }
).count()

// 3.
db.librosEspeciales.find(
    {
        $and : [
            {
                genero : 'romance'
            },
            {
                autores : 'Lucia Herrera'
            }
        ]
    }
).count()

// 4.
db.librosEspeciales.find(
    {
        nivel : 'juvenil'
    },
    {
        _id : 0,
        titulo : 1,
        paginas : 1
    }
)

// 5.
db.librosEspeciales.find(
    {
        $and : [
            {
                paginas : {
                    $gte : 200
                }
            },
            {
                paginas : {
                    $lte : 400
                }
            }
        ]
    },
    {
        _id : 0,
        titulo : 1,
        paginas : 1,
        nivel : 1
    }
)