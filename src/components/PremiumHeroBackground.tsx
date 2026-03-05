import React from 'react'

const PremiumHeroBackground = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/20 blur-[160px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-yellow-400/20 blur-[140px]" />
    </div>
  )
}

export default PremiumHeroBackground