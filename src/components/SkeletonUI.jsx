import React from 'react'
import SkeletonBox from './SkeletonBox'
function SkeletonUI() {
  return (
    <div className="container">
        <div style={{display:'flex',justifyContent:'center'}}>
        <SkeletonBox/>
        <SkeletonBox/>
        <SkeletonBox/>
        <SkeletonBox/>

        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <SkeletonBox/>
        <SkeletonBox/>
        <SkeletonBox/>
        <SkeletonBox/>

        </div><div style={{display:'flex',justifyContent:'center'}}>
        <SkeletonBox/>
        <SkeletonBox/>
        <SkeletonBox/>
        <SkeletonBox/>

        </div>
    </div>
  )
}

export default SkeletonUI