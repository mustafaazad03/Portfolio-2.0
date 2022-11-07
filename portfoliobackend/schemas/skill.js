export default {
    name :'technology',
    title : 'Technology',
    type : 'document',
    fields: [
        {
            name: 'name',
            title: 'name',
            type :'string',
        },
        {
            name: 'skillimg',
            title: 'SkillImg',
            type :'image',
            options : {
                hotspot : true,
            }
        },{
            name : 'color',
            title : 'Color',
            type : 'string',
        }
    ],
}