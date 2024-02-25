import React from 'react'

function StructureComponent({ title, content }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="m-8">
            <b className="text-5xl">{title}</b>
            <div className="mt-4">
                {content}
            </div>
        </div>
    </div>
  )
}

export default StructureComponent