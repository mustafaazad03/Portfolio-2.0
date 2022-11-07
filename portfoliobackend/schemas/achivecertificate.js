export default {
    name: 'certificate',
    title: 'Certificate',
    type: 'document',
    fields : [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options : {
                hotspot : true
            }
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'text',
        },
    ]
}