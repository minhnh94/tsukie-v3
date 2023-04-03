function Screen(props) {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="min-h-screen flex">
        { props.children }
      </div>
    </div>
  )
}

export default Screen
