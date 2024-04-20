import '@/css/DevelopmentPage.css'
export default function WebDevelopmentLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
       <div className="flex flex-row align-center pt-5 pb-5 text-xs">
        <div>Courses &nbsp;</div>
        <div>{">"}</div>
        <div>&nbsp;Development&nbsp;</div>
        <div>{">"}</div>
        <div>&nbsp;Web Development</div>
       </div>
       <header className='text-xl'>Development</header>
        {children}
      </section>
    )
  }