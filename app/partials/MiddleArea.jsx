function MiddleArea(props) {
  return (
    <div className="grow">
      <div className="max-w-[700px]">
        { props.children }
      </div>
    </div>
  )
}

export default MiddleArea
