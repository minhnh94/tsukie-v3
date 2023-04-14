function RightSidebar(props) {
  return (
    <aside className="md:w-[240px] lg:w-[300px] shrink-0">
      <div className="space-y-6 h-full">
        { props.children }
      </div>
    </aside>
  )
}

export default RightSidebar
