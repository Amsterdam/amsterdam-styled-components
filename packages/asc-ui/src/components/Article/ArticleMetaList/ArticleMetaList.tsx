import React from 'react'
import ArticleMetaListStyle, {
  ArticleMetaListItemStyle,
} from './ArticleMetaListStyle'

export type Props = {
  dateTime?: string
  dateFormatted?: string

  fields: Array<{ id: number; label: string }>
}

const ArticleMetaList: React.FC<Props> = ({
  dateTime,
  dateFormatted,
  fields,
}) => (
  <ArticleMetaListStyle>
    {dateFormatted && dateTime && (
      <ArticleMetaListItemStyle>
        <time dateTime={dateTime}>{dateFormatted}</time>
      </ArticleMetaListItemStyle>
    )}
    {fields.length &&
      fields.map(field => (
        <ArticleMetaListItemStyle key={field.id}>
          {field.label}
        </ArticleMetaListItemStyle>
      ))}
  </ArticleMetaListStyle>
)

ArticleMetaList.defaultProps = {
  fields: [],
}

export default ArticleMetaList
