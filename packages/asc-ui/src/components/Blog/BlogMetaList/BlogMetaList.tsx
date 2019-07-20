import React from 'react'
import BlogMetaListStyle, { BlogMetaListItemStyle } from './BlogMetaListStyle'

export type Props = {
  dateTime?: string
  dateFormatted?: string
  fields?: Array<{ id: number; label: string }>
} & React.HTMLAttributes<HTMLElement>

const BlogMetaList: React.FC<Props> = ({
  dateTime,
  dateFormatted,
  fields,
  className,
}) => (
  <BlogMetaListStyle className={className}>
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
