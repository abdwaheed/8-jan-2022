import React from 'react'

export default function UserDiscussionComments({ commentor, comment, date, teacher }) {
  return (
    <>
      <div className="py-2 mx-5 border my-3">
        <p className={teacher ? 'px-2' : 'px-2 text-primary'}
          styles={teacher ? { fontWeight: 'bolder' } : ''}   >{commentor}</p>
        <p className='px-2'>{comment}</p>
        <p className='px-2 text-success mb-0'>{date}</p>
      </div>
    </>
  )
}
