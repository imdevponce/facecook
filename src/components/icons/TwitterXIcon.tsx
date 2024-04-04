interface Props {
  height: number
  width: number
}

function TwitterXIcon ({ height, width }: Props) {
  return (
    <a href="https://www.google.com">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={width} height={height} viewBox="0 0 48 48">
        <polygon fill="#616161" points="41,6 9.929,42 6.215,42 37.287,6"></polygon><polygon fill="#fff" fillRule="evenodd" points="31.143,41 7.82,7 16.777,7 40.1,41" clipRule="evenodd"></polygon><path fill="#616161" d="M15.724,9l20.578,30h-4.106L11.618,9H15.724 M17.304,6H5.922l24.694,36h11.382L17.304,6L17.304,6z"></path>
      </svg>
    </a>
  )
}

export default TwitterXIcon