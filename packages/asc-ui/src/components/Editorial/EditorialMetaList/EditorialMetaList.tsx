import type { HTMLAttributes } from 'react'
import EditorialMetaListStyle, {
  EditorialMetaListItemStyle,
} from './EditorialMetaListStyle'

export type Props = {
  dateTime?: string
  dateFormatted?: string
  fields?: Array<{ id: number; label: string }>
} & HTMLAttributes<HTMLElement>

function EditorialMetaList({
  dateTime,
  dateFormatted,
  fields,
  ...otherProps
}: Props) {
  return (
    <EditorialMetaListStyle {...otherProps}>
      {dateFormatted && dateTime && (
        <EditorialMetaListItemStyle>
          <time dateTime={dateTime}>{dateFormatted}</time>
        </EditorialMetaListItemStyle>
      )}
      {fields &&
        fields.length &&
        fields.map((field) => (
          <EditorialMetaListItemStyle key={field.id}>
            {field.label}
          </EditorialMetaListItemStyle>
        ))}
    </EditorialMetaListStyle>
  )
}

export default EditorialMetaList
