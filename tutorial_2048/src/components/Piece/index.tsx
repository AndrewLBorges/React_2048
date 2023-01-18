import React from 'react'
import './styles.css'
import { PieceProps } from './types'

const Piece: React.FC<PieceProps> = ({ num }) => {
    return (
        <div className={`piece piece_${num}`}>
            {num}
        </div>
    )
}
export default Piece