import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Marketplace } from '@/pages/Marketplace'
import { TaskDetail } from '@/pages/TaskDetail'
import { PostTask } from '@/pages/PostTask'
import { MyTasks } from '@/pages/MyTasks'
import { Toaster } from '@/components/ui/Toaster'

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Marketplace />} />
          <Route path="/task/:id" element={<TaskDetail />} />
          <Route path="/post" element={<PostTask />} />
          <Route path="/my-tasks" element={<MyTasks />} />
        </Routes>
        <Toaster />
      </Layout>
    </BrowserRouter>
  )
}

export default App