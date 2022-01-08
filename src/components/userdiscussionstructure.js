import React from 'react'

export default function UserDiscussionStructure({ children, heading }) {
  return (
    <>
      <div class="intended-learners my-5">
        <div class="dog d-flex justify-content-between overflow-hidden">
          <div>
            <h3 class="py-4 px-5">{heading}</h3>
          </div>
        </div>

        {children}

      </div>
    </>
  )
}
