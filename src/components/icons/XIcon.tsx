import styles from './x-icon.module.css'
interface Props {
  height: number
  width: number
  onClick: () => void
}

function XIcon ({ height, width, onClick }: Props) {
  return (
    <svg className={styles.xIcon} xmlns="http://www.w3.org/2000/svg" version="1.0" width={width} height={height} viewBox="0 0 100.000000 100.000000" preserveAspectRatio="xMidYMid meet" onClick={onClick}>
      <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path d="M270 725 l-24 -26 99 -99 100 -100 -100 -100 -100 -100 28 -27 27 -28 100 100 100 100 100 -100 100 -100 27 28 28 27 -100 100 -100 100 100 100 100 100 -28 27 -27 28 -100 -100 -100 -100 -98 98 c-53 53 -100 97 -103 97 -3 0 -16 -11 -29 -25z"/>
      </g>
    </svg>
  )
}

export default XIcon