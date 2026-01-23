function Screen(props) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="min-h-screen flex min-w-0">
        {props.children}
      </div>
    </div>
  )
}

export default Screen
