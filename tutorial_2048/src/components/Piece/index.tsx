import React from 'react'
import './styles.css'
import { PieceProps } from './types'

const Piece: React.FC<PieceProps> = ({ num }) => {
    return (
        <div className={'piece'}>
            {num}
        </div>
    )
}
export default Piece