
import React from 'react';
import { motion } from 'framer-motion';
import { LayoutGrid, BookOpen, BarChart2, Bell, MessageSquare, Search, Plus, ExternalLink, ChevronRight, Clock, User } from 'lucide-react';

const SidebarItem = ({ icon: Icon, active = false }: { icon: any, active?: boolean }) => (
  <button className={`p-3 rounded-xl transition-all ${active ? 'bg-white text-black shadow-sm' : 'text-gray-400 hover:bg-white/10 hover:text-white'}`}>
    <Icon size={20} />
  </button>
);

const Card = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white rounded-3xl p-6 shadow-sm border border-gray-100 ${className}`}>
    {children}
  </div>
);

export const Dashboard: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex h-screen bg-[#f3f4f6] p-4 font-inter"
    >
      {/* Sidebar */}
      <aside className="w-20 bg-[#1a1a1a] rounded-3xl flex flex-col items-center py-8 space-y-8">
        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
          <Plus size={24} className="text-black" />
        </div>
        
        <div className="flex flex-col space-y-4">
          <SidebarItem icon={LayoutGrid} active />
          <SidebarItem icon={BookOpen} />
          <SidebarItem icon={BarChart2} />
          <SidebarItem icon={Bell} />
          <SidebarItem icon={MessageSquare} />
        </div>

        <div className="mt-auto flex flex-col space-y-4">
          <SidebarItem icon={User} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 px-8 py-4 overflow-y-auto">
        <header className="flex items-center justify-between mb-8">
          <div className="relative w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full pl-12 pr-4 py-3 bg-white border-none rounded-2xl focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
          </div>
          <div className="flex items-center space-x-4">
             <button className="p-3 bg-white rounded-2xl shadow-sm text-gray-400">
               <Bell size={20} />
             </button>
             <div className="w-12 h-12 bg-gray-300 rounded-2xl overflow-hidden shadow-sm border-2 border-white">
               <img src="https://picsum.photos/200" alt="Avatar" className="w-full h-full object-cover" />
             </div>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-6 mb-8">
          {/* Main Banner */}
          <Card className="col-span-12 lg:col-span-4 bg-[#6d5ae6] text-white overflow-hidden relative min-h-[240px]">
            <div className="relative z-10 flex flex-col justify-between h-full">
              <span className="text-sm font-medium opacity-80">Read Now</span>
              <h2 className="text-4xl font-bold mt-4 leading-tight">Curriculum is going to be very hot.</h2>
              <div className="mt-8">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">🔥</span>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
          </Card>

          {/* Analytics */}
          <Card className="col-span-12 md:col-span-6 lg:col-span-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg text-gray-900">Statistics</h3>
              <div className="p-2 bg-gray-100 rounded-lg text-gray-400">
                <BarChart2 size={16} />
              </div>
            </div>
            <div className="flex items-end space-x-4">
              <div className="flex-1">
                <p className="text-5xl font-black text-gray-900 mb-2">32h</p>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500 font-bold text-sm">+80%</span>
                  <span className="text-gray-400 text-sm font-medium">Homework</span>
                </div>
              </div>
              <div className="flex space-x-2 h-20 items-end">
                <div className="w-2 bg-gray-100 rounded-t-full h-[30%]" />
                <div className="w-2 bg-gray-100 rounded-t-full h-[50%]" />
                <div className="w-2 bg-yellow-400 rounded-t-full h-[90%]" />
                <div className="w-2 bg-gray-100 rounded-t-full h-[60%]" />
              </div>
            </div>
            <div className="mt-6 flex space-x-4">
              <button className="flex-1 py-3 bg-black text-white rounded-xl font-bold text-sm">Details</button>
              <button className="p-3 bg-gray-100 rounded-xl">
                <Plus size={20} className="text-gray-600" />
              </button>
            </div>
          </Card>

          {/* Promo */}
          <Card className="col-span-12 md:col-span-6 lg:col-span-4 bg-white border-2 border-dashed border-gray-200">
             <div className="flex items-start justify-between">
                <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-2">Until August 15</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">Choose a discount curriculum. The best 💎 tutors will always help you.</p>
                </div>
                <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center text-white">
                   <ChevronRight size={20} />
                </div>
             </div>
             <div className="mt-8 flex items-center justify-between">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="Avatar" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 font-medium">Course start</p>
                  <p className="font-bold text-sm">05/08/2023</p>
                </div>
             </div>
          </Card>
        </div>

        {/* Course List */}
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Upcoming courses</h3>
          <button className="text-[#6d5ae6] font-bold text-sm hover:underline">Find your class</button>
        </div>

        <div className="space-y-4">
          {[
            { title: "Graphic Design", tag: "Creative", date: "12.05.2023", time: "142h", color: "bg-blue-500" },
            { title: "Product Management", tag: "Skills", date: "22.05.2023", time: "262h", color: "bg-yellow-500" },
            { title: "UI/UX Design", tag: "Design", date: "17.07.2023", time: "184h", color: "bg-purple-500" }
          ].map((course, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-4 flex items-center justify-between shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 ${course.color} rounded-xl flex items-center justify-center text-white`}>
                   <BookOpen size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{course.title}</h4>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{course.tag}</span>
                </div>
              </div>
              <div className="flex items-center space-x-12">
                <div className="text-sm font-semibold text-gray-400">{course.date}</div>
                <div className="flex items-center space-x-2 text-sm font-semibold text-gray-900">
                  <Clock size={16} className="text-gray-400" />
                  <span>{course.time}</span>
                </div>
                <button className="px-5 py-2.5 bg-gray-100 rounded-xl font-bold text-sm hover:bg-black hover:text-white transition-colors">
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </motion.div>
  );
};
