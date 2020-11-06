import {
  Alert,
  Checkbox,
  Column,
  CompactPager,
  FilterBox,
  Label,
  Row,
  Table,
  TableCell,
  TableHeaderCell,
  TableResizer,
  TableRow,
} from '@amsterdam/asc-ui'
import React, { useEffect, useMemo, useState } from 'react'
import {
  Column as ColumnType,
  FilterProps,
  useBlockLayout,
  useFilters,
  usePagination,
  useResizeColumns,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table'
import styled from 'styled-components'

const DefaultColumnFilter: React.FC<FilterProps<any>> = ({
  column: { filterValue, preFilteredRows, setFilter },
}) => (
  <input
    value={filterValue || ''}
    onChange={(e) => {
      setFilter(e.target.value)
    }}
    placeholder={`Search ${preFilteredRows.length} records...`}
  />
)

const SelectColumnFilter: React.FC<FilterProps<any>> = ({
  column: { filterValue, setFilter, preFilteredRows, id },
}) => {
  const options = React.useMemo(() => {
    const opts = new Set()
    preFilteredRows.forEach((row) => {
      opts.add(row.values[id])
    })
    return Array.from(opts.values()) as string[]
  }, [id, preFilteredRows])

  return options.length ? (
    <select
      value={filterValue}
      onChange={(e) => {
        setFilter(e.target.value)
      }}
      onBlur={(e) => {
        setFilter(e.target.value)
      }}
    >
      <option value="">All</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  ) : null
}

const StyledFilterBox = styled(FilterBox)`
  align-self: flex-start;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`
const StyledTable = styled(Table)`
  max-height: 700px;
`

type Props = {
  columns: ColumnType[]
  data: any[]
}

const ReactTableExample: React.FC<Props> = ({ columns, data }) => {
  const defaultColumn = React.useMemo(
    () => ({
      minWidth: 30,
      width: 150,
      maxWidth: 400,
      Filter: () => null,
    }),
    [],
  )
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    allColumns,
    gotoPage,
    prepareRow,
    getToggleHideAllColumnsProps,
    pageOptions,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetFilters: false,
      initialState: {
        pageSize: 30,
      },
    },
    useBlockLayout,
    useResizeColumns,
    useFilters,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.allColumns.push((cols) => [
        // A column for selection
        {
          key: 'selection',
          id: 'selection',
          disableResizing: true,
          minWidth: 55,
          width: 55,
          maxWidth: 55,
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...cols,
      ])
    },
  )

  return (
    <Row>
      <Column wrap span={{ small: 1, medium: 1, big: 1, large: 4, xLarge: 4 }}>
        <StyledFilterBox label="Filters">
          <Label htmlFor="all" label="Alle kolommen tonen">
            <Checkbox
              id="all"
              variant="primary"
              {...getToggleHideAllColumnsProps()}
            />
          </Label>
          <ul>
            {allColumns.slice(1).map((column) => (
              <li key={column.id}>
                <Label htmlFor={column.id} label={column.Header as string}>
                  <Checkbox
                    id={column.id}
                    value={column.id}
                    variant="primary"
                    {...column.getToggleHiddenProps()}
                  />
                </Label>
              </li>
            ))}
          </ul>
        </StyledFilterBox>
      </Column>
      <Column wrap span={{ small: 1, medium: 3, big: 4, large: 8, xLarge: 8 }}>
        {headerGroups.length ? (
          <StyledTable {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <TableRow isSticky {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column, i) => (
                    <>
                      <TableHeaderCell
                        // The order of spreading the props here matters
                        {...column.getSortByToggleProps()}
                        {...column.getHeaderProps()}
                        isSticky={i === 0}
                        sorted={
                          // eslint-disable-next-line no-nested-ternary
                          column.isSorted
                            ? column.isSortedDesc
                              ? 'desc'
                              : 'asc'
                            : 'none'
                        }
                        title={column.render('Header') as string}
                      >
                        {column.canResize && (
                          <TableResizer
                            {...column.getResizerProps({
                              // This will prevent triggering the sort functionality
                              onClick(ev: React.MouseEvent) {
                                ev.stopPropagation()
                              },
                            })}
                          />
                        )}
                        {column.canFilter ? column.render('Filter') : null}
                      </TableHeaderCell>
                    </>
                  ))}
                </TableRow>
              ))}
            </thead>

            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row)
                return (
                  <TableRow {...row.getRowProps()} isSelected={row.isSelected}>
                    {row.cells.map((cell, i) => (
                      <TableCell {...cell.getCellProps()} isSticky={i === 0}>
                        {cell.render('Cell')}
                      </TableCell>
                    ))}
                  </TableRow>
                )
              })}
            </tbody>
          </StyledTable>
        ) : (
          <Alert>Er zijn geen kolommen geselecteerd</Alert>
        )}
        <CompactPager
          page={pageIndex + 1}
          pageSize={pageSize}
          collectionSize={pageOptions.length * 10}
          onPageChange={(nextPageIndex) => {
            gotoPage(nextPageIndex - 1)
          }}
        />
      </Column>
    </Row>
  )
}

function TestComponent() {
  const columns: ColumnType[] = React.useMemo(
    () => [
      {
        Header: 'Naam',
        accessor: 'name',
        Filter: DefaultColumnFilter,
        width: 200,
      },
      {
        Header: 'Huisnummer',
        accessor: 'houseNumber',
        width: 80,
      },
      {
        Header: 'Huisletter',
        accessor: 'houseLetter',
        width: 80,
      },
      {
        Header: 'Huisnummer toevoeging',
        accessor: 'houseNumberAddition',
        width: 80,
      },
      {
        Header: 'Stad',
        accessor: 'city',
      },
      {
        Header: 'Stadsdeel',
        accessor: 'district',
        defaultCanFilter: true,
        Filter: SelectColumnFilter,
      },
      {
        Header: 'Eigendomsverhouding',
        accessor: 'propertyState',
      },
      {
        Header: 'Postcode',
        accessor: 'postalCode',
      },
      {
        Header: 'Object type',
        accessor: 'objectType',
      },
    ],
    [],
  )
  const [data, setData] = useState<any[]>([])
  const [page, setPage] = useState(1)
  const memoizedData = useMemo(() => data, [data])

  const fetchData = () => {
    fetch(
      `https://api.data.amsterdam.nl/dataselectie/bag/?page=${page}&dataset=ves&size=10000`,
    )
      .then((res) => res.json())
      .then((res) => {
        setPage(page + 1)
        const normalizedResult = res.object_list.map((object: any) => ({
          id: object.nummeraanduiding_id,
          name: object.naam,
          houseNumber: object.huisnummer,
          houseLetter: object.huisletter,
          houseNumberAddition: object.huisnummer_toevoeging,
          city: object.woonplaats,
          district: object.stadsdeel_naam,
          propertyState: object.eigendomsverhouding,
          postalCode: object.postcode,
          objectType: object.type_desc,
        }))
        setData([...data, ...normalizedResult])
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return data.length ? (
    <>
      <Alert level="warning" dismissible>
        Note: this composed component is made to be used for user tests and will
        eventually be removed from storybook.
      </Alert>
      <ReactTableExample columns={columns} data={memoizedData} />
    </>
  ) : null
}

export default TestComponent
