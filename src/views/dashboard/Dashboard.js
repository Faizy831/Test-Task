import React, { useState } from 'react'
import {
  CTable,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CSpinner,
  CPagination,
  CPaginationItem,
} from '@coreui/react'
import { FetchUsersData } from 'src/service/user_service'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import Loader from 'src/components/Loader'

const PAGE_SIZE = 10

const Dashboard = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { data, isLoading } = useQuery(['users', pageNumber], () => FetchUsersData(pageNumber))
  const pageCount = data ? Math.ceil(data.count / PAGE_SIZE) : 0
  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1)

  const handlePageClick = (pageNumber) => {
    setPageNumber(pageNumber)
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CTable bordered color="dark" hover>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">#</CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Gender</CTableHeaderCell>
                <CTableHeaderCell scope="col">Mass</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {data &&
                data.results.map((e, index) => {
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>
                        <Link
                          to={{
                            pathname: '/user',
                          }}
                          state={e}
                        >
                          <h6 className="text">{e.name}</h6>
                        </Link>
                      </CTableDataCell>
                      <CTableDataCell>{e.gender}</CTableDataCell>
                      <CTableDataCell>{e.mass}</CTableDataCell>
                    </CTableRow>
                  )
                })}
            </CTableBody>
          </CTable>
          <CPagination size="sm" aria-label="Page navigation example">
            <CPaginationItem
              disabled={pageNumber === 1}
              onClick={() => handlePageClick(pageNumber - 1)}
            >
              Previous
            </CPaginationItem>
            {pageNumbers.map((number) => (
              <CPaginationItem
                key={number}
                active={number === pageNumber}
                onClick={() => handlePageClick(number)}
              >
                {number}
              </CPaginationItem>
            ))}
            <CPaginationItem
              disabled={pageNumber === pageCount}
              onClick={() => handlePageClick(pageNumber + 1)}
            >
              Next
            </CPaginationItem>
          </CPagination>
        </>
      )}
    </>
  )
}

export default Dashboard
