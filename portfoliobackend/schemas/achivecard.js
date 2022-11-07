export default {
    name: 'work',
    title: 'Work',
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
        {
            name: 'year',
            title: 'Year',
            type: 'string',
        },
    ]
}