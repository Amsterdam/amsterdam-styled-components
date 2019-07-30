import React from 'react'
import EditorialMetaListStyle, { EditorialMetaListItemStyle } from './EditorialMetaListStyle'

export type Props = {
  dateTime?: string
  dateFormatted?: string
  fields?: Array<{ id: number; label: string }>
} & React.HTMLAttributes<HTMLElement>

const EditorialMetaList: React.FC<Props> = ({
  dateTime,
  dateFormatted,
  fields,
  ...otherProps
}) => (
  <EditorialMetaListStyle {...otherProps}>
    {dateFormatted && dateTime && (
      <EditorialMetaListItemStyle>
        <time dateTime={dateTime}>{dateFormatted}</time>
      </EditorialMetaListItemStyle>
    )}
    {fields &&
      fields.length &&
      fields.map(field => (
        <EditorialMetaListItemStyle key={field.id}>
          {field.label}
        </EditorialMetaListItemStyle>
      ))}
  </EditorialMetaListStyle>
)

export default EditorialMetaList
