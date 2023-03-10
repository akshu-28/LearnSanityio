import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'loginui',
    title: 'LoginUi',
    type: 'document',
    fields: [
        defineField({
            name: 'banner',
            title: 'Banner',
            type: 'string',
        }),
        defineField({
            name: 'loginbanner',
            title: 'LoginBanner',
            type: 'image',

        }),


    ],
    preview: {
        select: {
            title: 'banner',

        },
    },
})
