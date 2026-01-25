function MiddleArea(props) {
  return (
    <div className="grow min-w-0">
      <div className="lg:max-w-none">
        {props.children}
      </div>
    </div>
  )
}

export default MiddleArea
