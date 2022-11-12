import client from 'part:@sanity/base/client'

export default {
    name: 'newsletters',
    title: 'Newsletters',
    type: 'document',
    fields: [
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: Rule => [
                Rule.max(60).warning('Max name limit reached'),
                Rule => Rule.required().custom((email) => {
                    return client.fetch(`count(*[_type == "newsletters" && email == "${email}"])`)
                        .then(count => {
                            if (count > 1) {
                                return 'Already registered on our newsletters!'
                            } else {
                                return true
                            }
                        })
                })
            ],
            readOnly: true
        },
    ],
    preview: {
        select: {
            title: 'email'
        },
    },
}
