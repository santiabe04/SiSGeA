import React from 'react'

function StructureCardComponent({ title, content }) {
  return (
    <div className="flex flex-col items-center justify-center h-full">
        <div className="m-6 justify-center items-center">
            <b className="text-5xl">{title}</b>
            <div className="mt-4 gap-2 grid grid-cols-2 sm:grid-cols-4">
                {content}
            </div>
        </div>
    </div>
  )
}

export default StructureCardComponent