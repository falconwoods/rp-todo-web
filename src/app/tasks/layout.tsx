import TopBar from '../../components/top-bar';

export default function TasksLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className='bg-gray-100 h-screen'>
        <TopBar/>
        <div>Left Side Bar</div>
        <div>List View</div>
        <div>Task View</div>
        {children}
      </div>
    )
  }