export default {
    name : 'timeline',
    title : 'Timeline',
    type : 'document',
    fields : [
        {
            name : 'date',
            title : 'Date',
            type : 'string'
        },
        {
            name: 'order',
            title: 'Order',
            type: 'number',
            initialValue: 0,
            validation: Rule => [
                Rule.positive().error('Order must be possitive.'),
            ]
        },
        {
            name : 'experience',
            title : 'Experience',
            type : 'string'
        },
        {
            name : 'desc',
            title : 'Desc',
            type : 'text'
        }
    ]
}