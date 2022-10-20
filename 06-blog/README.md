# Blog API

- Front:
    - Obtener todas las publicaciónes
    - Obtener una en especifico
    - Obtener todas las categorias
    - Obtener todos los post de una categoria en especifico
    - Obtener todos los posts que he creado
    - Obtener todos los posts de un usuario en especifico
    - Podemos paginar los posts
    - Acciones de CRUD sobre Posts
    - Crear categorias


```json
    {
        "total": 68,
        "prev": "localhost:9000/api/v1/posts?start=51&limit=60",
        "next": "localhost:9000/api/v1/posts?start=61&limit=68",
        "data": [
            {
               "id" : "a860986d-2570-4f39-afe6-c30fb74f350e",
               "title" : "ejemplo",
               "content" : "lorem ipsum",
               "createdBy": {
                    "id" : "5b7cc060-3597-4946-bb9b-3a54e2098f82",
                    "name" : "Sahid",
                    "email" : "sahid.kick@academlo.com"
               },
               "category" :{
                    "id" :4,
                    "name" : "Tecnologia"
               }
            }
        ]
    }

```

/api/v1

/users
  - /me
  - /me/posts
  - /me/posts/:id
  - /:id


/categories
  - /:id
  - /:id/posts

/posts
  - /:id


