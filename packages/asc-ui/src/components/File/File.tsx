import React, {
  useState,
  useRef,
  useImperativeHandle,
  forwardRef,
  HTMLAttributes,
  ChangeEvent,
} from 'react'
import {
  Props,
  FilesProps,
  FileUploadContainer,
  FormField,
  DragDropText,
  UploadFileBtn,
  FilePreviewContainer,
  // ImagePreview,
  PreviewContainer,
  PreviewList,
  FileMetaData,
  RemoveFileIcon,
  InputLabel,
} from './FileStyle'

const KILO_BYTES_PER_BYTE = 1000
const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000

const convertNestedObjectToArray = (nestedObj: any) =>
  Object.keys(nestedObj).map((key) => nestedObj[key])

const convertBytesToKB = (bytes: number) =>
  Math.round(bytes / KILO_BYTES_PER_BYTE)

const File = forwardRef<
  HTMLInputElement,
  Props & HTMLAttributes<HTMLInputElement>
>(
  (
    {
      label,
      updateFilesCb,
      maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
      ...otherProps
    },
    externalRef,
  ) => {
    const [files, setFiles] = useState<any>({})
    const ref = useRef<HTMLInputElement>(null)

    useImperativeHandle(externalRef, () => ref.current as HTMLInputElement)

    const callUpdateFilesCb = (allFiles: FilesProps) => {
      const filesAsArray = convertNestedObjectToArray(allFiles)
      updateFilesCb(filesAsArray)
    }

    const handleUploadBtnClick = () => {
      if (ref.current) {
        ref.current.click()
      }
    }

    const addNewFiles = (newFiles: FilesProps) => {
      for (const file of newFiles) {
        if (file.size <= maxFileSizeInBytes) {
          if (!otherProps.multiple) {
            return { file }
          }
          files[file.name] = file
        }
      }
      return { ...files }
    }

    const handleNewFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
      const { files: newFiles } = e.target
      if (newFiles?.length) {
        const updatedFiles = addNewFiles(newFiles)
        setFiles(updatedFiles)
        callUpdateFilesCb(updatedFiles)
      }
    }

    const removeFile = (fileName: string) => {
      delete files[fileName]
      setFiles({ ...files })
      callUpdateFilesCb({ ...files } as FilesProps)
    }

    return (
      <>
        <FileUploadContainer>
          <InputLabel>{label}</InputLabel>
          <DragDropText>
            Sleep {otherProps.multiple ? 'de bestanden' : 'een bestand'} in dit
            vlak of
          </DragDropText>
          <UploadFileBtn type="button" onClick={handleUploadBtnClick}>
            <i className="fas fa-file-upload" />
            <span>
              selecteer {otherProps.multiple ? 'bestanden' : 'een bestand'}
            </span>
          </UploadFileBtn>
          <FormField
            type="file"
            ref={ref}
            onChange={handleNewFileUpload}
            title=""
            value=""
            {...otherProps}
          />
        </FileUploadContainer>
        <FilePreviewContainer>
          <span>To Upload</span>
          <PreviewList>
            {Object.keys(files).map((fileName) => {
              const file = files[fileName]
              console.log('file', file)

              // const isImageFile = false // file.type.split('/')[0] === 'image'
              return (
                <PreviewContainer key={fileName}>
                  <div>
                    <FileMetaData>
                      <span>{file.name}</span>
                      <aside>
                        <span>{convertBytesToKB(file.size)} kb</span>
                        <RemoveFileIcon
                          style={{ padding: '5px' }}
                          className="fas fa-trash-alt"
                          onClick={() => removeFile(fileName)}
                        />
                      </aside>
                    </FileMetaData>
                  </div>
                </PreviewContainer>
              )
            })}
          </PreviewList>
        </FilePreviewContainer>
      </>
    )
  },
)

export default File
