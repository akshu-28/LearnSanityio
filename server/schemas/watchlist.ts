import { defineField, defineType } from "sanity";

export default defineType({
    name: 'watchlist',
    title: 'Watchlist',
    type: 'document',
    fields: [defineField({
        name: 'symbolName',
        title: 'Symbol',
        type: 'string',
    }),
    defineField({
        name: 'cmpyName',
        title: 'CompanyName',
        type: 'string',
    }), defineField({
        name: 'ltp',
        title: 'Ltp',
        type: 'string',
    }),
    defineField({
        name: 'cp',
        title: 'Change Per',
        type: 'string',
    }),
    defineField({
        name: 'change',
        title: 'Change',
        type: 'string',
    }),]
})