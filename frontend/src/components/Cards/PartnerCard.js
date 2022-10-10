import React from 'react'
import '../../assets/css/PartnerCard.css'

const PartnerCard = ({ item }) => {
    return (
        <img className='partner-image' src={item.image} alt={item.alt} />
    )
}

export default PartnerCard