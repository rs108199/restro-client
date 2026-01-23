import React from 'react'
import TableBooking from './TableBooking'
import LoungeBooking from './LoungeBooking'

function BookingForm({tableEnabled} : {tableEnabled : boolean}) {
  return (
    <div>
        {
            tableEnabled ? <TableBooking/>: <LoungeBooking/>
        }
    </div>
  )
}

export default BookingForm