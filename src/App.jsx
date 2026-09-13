import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {
  const users=[
    {
     img:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:'Technology makes our lives easier by helping us work faster and communicate better.',
     tag:'Satisfied'

    },
    {
  img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

     intro:'Learning software development helps us solve problems and build useful applications.',
     tag:'UnderServed'
    },
    {
  img:'https://plus.unsplash.com/premium_photo-1663047305318-c6debe9f633c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',

     intro:'Real-world projects improve coding skills and teach us how different technologies work together.',
     tag:'UnderBanked'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
    </div>  )
}

export default App