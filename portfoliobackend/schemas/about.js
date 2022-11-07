export default {
    name : 'about',
    title : 'About',
    type : 'document',
    fields: [
        {
            name : 'head',
            title : 'Head',
            type : 'string'
        },
        {
            name : 'para',
            title : 'Para',
            type : 'text'
        },
        {
            name : 'img',
            title : 'Img',
            type : 'image',
            options : {
                hotspot : true,
            }
        },
        {
            name : 'info',
            title : 'Info',
            type : 'array',
            of :[{type : 'string'}]
        },
        {
            name : 'result',
            title : 'Result',
            type : 'array',
            of :[{type : 'string'}]
        },
    ]
}