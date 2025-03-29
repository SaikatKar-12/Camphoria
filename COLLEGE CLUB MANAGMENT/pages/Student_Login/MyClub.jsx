/* eslint-disable no-unused-vars */
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";

const clubs = [
  { name: "UI Design Masters", members: "12.5k", description: "A community for passionate UI designers to share work, get feedback, and grow together.", image: "https://source.unsplash.com/300x200/?design" },
  { name: "Frontend Developers", members: "8.3k", description: "Connect with fellow frontend developers, share code snippets, and solve challenges together.", image: "https://source.unsplash.com/300x200/?code" },
  { name: "UX Innovation Hub", members: "5.2k", description: "Explore innovative UX solutions and stay updated with the latest design trends.", image: "https://source.unsplash.com/300x200/?frontend" }
];

export default function MyClubs() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">My Clubs</h2>
      <div className="flex items-center gap-4 mb-6">
        <Input 
          className="w-full p-2 border rounded-lg" 
          placeholder="Search clubs..." 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Tabs defaultValue="all">
        <TabsList className="flex gap-4 mb-6">
          <TabsTrigger value="all">All Clubs</TabsTrigger>
          <TabsTrigger value="design">Design</TabsTrigger>
          <TabsTrigger value="development">Development</TabsTrigger>
          <TabsTrigger value="uiux">UI/UX</TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {clubs.map((club, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <Card className="rounded-2xl shadow-lg overflow-hidden bg-white p-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 bg-gray-200 rounded-full" />
                <div>
                  <h3 className="text-lg font-semibold">{club.name}</h3>
                  <p className="text-sm text-gray-500">{club.members} members</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{club.description}</p>
              <div className="flex justify-between items-center">
                <div className="flex -space-x-2">
                  <img src="https://source.unsplash.com/30x30/?face" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://source.unsplash.com/30x30/?avatar" className="w-8 h-8 rounded-full border-2 border-white" />
                  <img src="https://source.unsplash.com/30x30/?profile" className="w-8 h-8 rounded-full border-2 border-white" />
                </div>
                <Button className="bg-gray-200 text-black">Manage</Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}