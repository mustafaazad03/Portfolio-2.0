export default {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields : [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'text',
        },
        {
            name: 'img',
            title: 'Image',
            type: 'image',
            options : {
                hotspot : true
            }
        },
        {
            name: 'month',
            title: 'Month',
            type: 'string',
        },
        {
            name: 'year',
            title: 'Year',
            type: 'string',
        },
        {
            name : 'slug',
            title : 'Slug',
            type : 'slug',
            options : {
                source : 'title',
                maxLength : 96,
            }
        },
        {
            name : 'publishedAt',
            title : 'Published At',
            type : 'datetime',
            options : {
                dateFormat : 'YYYY-MM-DD',
                timeStep : 5
            }
        },
        {
            name : 'date',
            title : 'Date',
            type : 'string'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                {
                type: 'block'
                },
                {
                type: 'image',
                fields: [
                    {
                    type: 'text',
                    name: 'alt',
                    title: 'Alternative text',
                    description: `Some of your visitors cannot see images, 
                        be they blind, color-blind, low-sighted; 
                        alternative text is of great help for those 
                        people that can rely on it to have a good idea of 
                        what\'s on your page.`,
                    options: {
                        isHighlighted: true
                    }
                    }
                ]
                }
            ]
        },
    ]
}