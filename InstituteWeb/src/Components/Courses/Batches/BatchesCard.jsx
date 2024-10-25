import React from 'react'
import './Batches.css'

function BatchesCard({batchName, nextBatch, durationBatch, mode, descriptionBatch}) {
  return (
    <>
      <div className="card h-100 py-3 bg-transparent" style={{border: '1px solid #fff'}}>
    <div className="card-body">
        <h5 className="card-title text-white fw-bold">{batchName}</h5>
        <p className="card-title text-white"><b>Next Batch:</b> {nextBatch}</p>
        <h6 className="card-subtitle mb-2 text-white"><b>Duration: </b>{durationBatch}</h6>
        <p className="card-text text-white">{mode}</p>
        <p className="card-text text-white" style={{opacity: '0.4'}}>{descriptionBatch}</p>
    </div>
</div>
    </>
  )
}

export default BatchesCard
