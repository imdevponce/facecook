import styles from './user-icon.module.css'
interface Props {
  height: number
  width: number
  onClick?: () => void
}

function UserIcon ({ height, width, onClick }: Props) {
  return (
    <svg className={styles.userIcon} 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.0" 
        width={width} 
        height={height} 
        viewBox="0 0 96.000000 96.000000" 
        preserveAspectRatio="xMidYMid meet" 
        onClick={onClick}
        >
      <g transform="translate(0.000000,96.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path d="M412 869 c-48 -14 -109 -80 -123 -131 -23 -89 12 -182 88 -229 57 -36 154 -34 210 3 62 41 88 90 88 168 0 77 -26 127 -85 166 -43 29 -125 39 -178 23z m136 -69 c42 -26 72 -76 72 -120 0 -44 -30 -94 -72 -120 -117 -71 -259 71 -188 188 26 42 76 72 120 72 19 0 50 -9 68 -20z"/>
        <path d="M185 375 c-19 -18 -25 -35 -25 -70 0 -63 20 -105 70 -148 63 -54 125 -72 250 -72 121 0 184 17 244 67 74 61 100 175 51 223 l-24 25 -271 0 -271 0 -24 -25z m553 -75 c4 -53 -28 -97 -96 -128 -50 -23 -70 -26 -162 -27 -93 0 -111 3 -162 27 -38 17 -64 38 -78 60 -19 32 -27 88 -13 102 4 3 119 5 257 4 l251 -3 3 -35z"/>
      </g>
    </svg>
  )
}

export default UserIcon