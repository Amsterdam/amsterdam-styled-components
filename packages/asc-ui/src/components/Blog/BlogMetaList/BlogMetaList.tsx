import React from 'react'
import BlogMetaListStyle, { BlogMetaListItemStyle } from './BlogMetaListStyle'

export type Props = {
  dateTime?: string
  dateFormatted?: string
  fields?: Array<{ id: number; label: string }>
}

const BlogMetaList: React.FC<Props> = ({ dateTime, dateFormatted, fields }) => (
  <BlogMetaListStyle>
    {dateFormatted && dateTime && (
      <BlogMetaListItemStyle>
        <time dateTime={dateTime}>{dateFormatted}</time>
      </BlogMetaListItemStyle>
    )}
    {fields &&
      fields.length &&
      fields.map(field => (
        <BlogMetaListItemStyle key={field.id}>
          {field.label}
        </BlogMetaListItemStyle>
      ))}
  </BlogMetaListStyle>
)

export default BlogMetaList
