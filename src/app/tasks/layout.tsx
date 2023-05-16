

export default function TasksLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div>
        <div>Left Side Bar</div>
        <div>List View</div>
        <div>Task View</div>
        {children}
      </div>
    )
  }