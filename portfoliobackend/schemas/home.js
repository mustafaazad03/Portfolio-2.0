export default {
    name : 'home',
    title : 'Home',
    type : 'document',
    fields : [
        {
            name : 'name',
            title : 'Name',
            type : 'string'
        },
        {
            name : 'desc',
            title : 'Desc',
            type : 'text'
        },
        {
            name : 'img',
            title : 'Img',
            type : 'image',
            options : {
                hotspot : true
            }
        }
    ]
}