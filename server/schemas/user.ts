import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'password',
            title: 'Password',
            type: 'string',

        }),


    ],
    preview: {
        select: {
            title: 'name',

        },
    },
})
